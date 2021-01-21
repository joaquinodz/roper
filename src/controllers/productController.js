let db = require("../database/models")
const fs = require('fs');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

exports.obtenerProductos = async (req, res) => {
    try {
        let id = req.params.id;
        let search = await db.Productos.findByPk(id, {
            include: ['categoria', 'condicion', 'color', 'talle', 'users']
        })
        let title = search.nombre
        return res.render('products/listado', {productoEspecifico: search, title});
    } catch(error) {
        console.log(error);
    }
};

exports.listarProductos = async (req, res) => {
    try {
        const productos = await db.Productos.findAll({
            include:['categoria', 'condicion', 'color', 'talle', 'users']
        })
        return res.render('products/list', {homeProductos: productos});
    } catch(error) {
        console.log(error);
    }
}

exports.listarProductosCategoria = async (req, res) => {
    // Obtenemos el ID de la categoria
    let categoria;
    switch (req.params.categoria) {
        case 'hombre':
            categoria = 2
            break;
        case 'mujer':
            categoria = 3
            break;
        default:
            return res.redirect('/productos');
    }
    
    try {
        // Ejecutamos la query.
        const productos = await db.Productos.findAll({
            include:['categoria', 'condicion', 'color', 'talle', 'users'],
            where: {
                categoria_id: categoria
            }
        })

        // Si no hay resultados, lo mando a la lista entera de productos.
        if (!productos) {
            return res.redirect('/productos')     
        } else {
            return res.render('products/list', { homeProductos: productos });
        }
    } catch(error) {
        console.log(error);
    }
}

exports.crearProducto = (req, res) => {
    if(req.session.usuario) {
        return res.render('products/create');
    } else {
        return res.redirect('/user/login')
    }
};

exports.generarProducto = async (req, res) => {
    // Si no inició sesion...
    if(!req.session.usuario) {
        return res.redirect('/user/login')
    }

    try {
        const newProducto = await db.Productos.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            cantidad: req.body.cantidad,
            categoria_id: req.body.genero,
            condicion_id: req.body.condicion,
            color_id: req.body.color,
            talle_id: req.body.talle,
            image: req.file.filename
        })
        console.log(newProducto.image);
        return res.redirect('/productos');
    } catch(error) {
        console.log(error);
    }  
};
    
exports.eliminarProducto = async (req, res) => {
    // Si no inició sesion...
    if(!req.session.usuario) {
        return res.redirect('/user/login')
    }
    // Buscamos el producto existente en la DB
    const productoEncontrado = await db.Productos.findByPk(req.params.id)

    // Bucamos el path donde se encuentra la imagen
    const path = './public/images/productos/' + productoEncontrado.image;

    // La borramos usando la path que averiguamos previamente
    fs.unlink(path, (err) => {
        if(err) {
            console.error(err);
            return;
        }
    })

    // Borramos el registro en la DB
    await db.Productos.destroy({
        where: {
            id: req.params.id
        }
    })

    return res.redirect('/productos');
};

exports.editarProducto = async (req, res) => {
    // Si no inició sesion...
    if(!req.session.usuario) {
        return res.redirect('/user/login')
    }

    let id = req.params.id;
    let producto = await db.Productos.findByPk(id, {
        include: ['categoria', 'condicion', 'color', 'talle', 'users']
    })
    return await res.render('products/edit', {productoEditar: producto, toThousand});    
};

exports.modificarProducto = async (req, res) => {
    let id = req.params.id;
    let productosAll = await db.Productos.findAll();
    let productoCambiado = await db.Productos.findByPk(id, {
        include: ['categoria', 'condicion', 'color', 'talle', 'users']
    });
    let nombre = productoCambiado.nombre;
    await productoCambiado.update({
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        categoria_id: req.body.genero,
        condicion_id: req.body.condicion,
        color_id: req.body.color,
        talle_id: req.body.talle
    })
    return res.render('products/list', {homeProductos: productosAll, title: nombre, toThousand});
};