let db = require("../database/models")
const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');
const { json } = require('express');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

exports.obtenerProductos = async (req, res) => {
    try {
        let id = req.params.id;
        let search = await db.Productos.findByPk(id, {
            include: ['categoria', 'condicion', 'color', 'talle', 'users']
        })
        let title = search.nombre
        res.render('products/listado', {productoEspecifico: search, title});
    } catch(error) {
        console.log(error);
    }
};

exports.listarProductos = async (req, res) => {
    try {
        const productos = await db.Productos.findAll({
            include:['categoria', 'condicion', 'color', 'talle', 'users']
        })
        res.render('products/list', {homeProductos: productos});
    } catch(error) {
        console.log(error);
    }
}

exports.crearProducto = (req, res) => {
    if(req.session.usuario) {
        res.render('products/create');
    } else {
        res.redirect('/user/login')
    }
};

exports.generarProducto = async (req, res) => {
    if(req.session.usuario) {
        try {
            const allProducts = await db.Productos.findAll();
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
            res.render(await 'products/list', {homeProductos: allProducts, toThousand});
        } catch(error) {
            console.log(error);
        }
    } else {
        res.redirect('/user/login')
    }
};
    
    exports.eliminarProducto = async (req, res) => {
    if(req.session.usuario) {
        const productos = await db.Productos.findAll();
        const productoEncontrado = await db.Productos.findByPk(req.params.id)
        const path = './public/images/productos/' + productoEncontrado.image;
        fs.unlink(path, (err) => {
            if(err) {
                console.error(err);
                return;
            }
        })
        await db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.render(await 'products/list', {homeProductos: productos, toThousand});
    } else {
        res.redirect('/user/login')
    }
};

exports.editarProducto = async (req, res) => {
    if(req.session.usuario) {
        let id = req.params.id;
        let producto = await db.Productos.findByPk(id, {
            include: ['categoria', 'condicion', 'color', 'talle', 'users']
        })
        await res.render('products/edit', {productoEditar: producto, toThousand});
    } else {
        res.redirect('/user/login')
    }
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
    res.render('products/list', {homeProductos: productosAll, title: nombre, toThousand});
};