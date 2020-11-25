let db = require("../../database/models")
const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');
const { json } = require('express');
const moviesController = require("../../../da/30 de octubre/controllers/moviesController");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let readJSON = () => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname + '/data/productsDB.json')));
};

exports.obtenerProductos = async (req, res) => {
    try {
        let id = req.params.id;
        let search = await db.Productos.findByPk(id, {
            include: ['categoria', 'condicion', 'color', 'talle', 'users', 'image']
        })
        res.render('products/listado', {productoEspecifico: search});
    } catch(error) {
        console.log(error);
    }
};

exports.listarProductos = async (req, res) => {
    try {
        const productos = await db.Productos.findAll({
            include:['categoria', 'condicion', 'color', 'talle', 'users', 'image']
        })
        res.render('products/list', {homeProductos: productos});
    } catch(error) {
        console.log(error);
    }
}

exports.crearProducto = (req, res) => {
    res.render('products/create');
};

exports.generarProducto = async (req, res) => {
    try {
        const allProducts = await db.Productos.findAll();
        const newProducto = await db.Productos.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            cantidad: req.body.cantidad,
            categoria_id: req.body.genero,
            condicion_id: req.body.condicion,
            color_id: req.body.color,
            talle_id: req.body.talle
        })
        res.render(await 'products/list', {homeProductos: allProducts, toThousand});
    } catch(error) {
        console.log(error);
    }
    let productos = readJSON();
};

exports.eliminarProducto = async (req, res) => {
    const productos = await db.Productos.findAll();
    // agarro el db en una variable
    const productoEncontrado = await db.Productos.findByPk(req.params.id, {
        include:["image"]
    })
    // filter con el id que viene por barra de búsqueda para sacar el producto encontrado
    await db.Productos.destroy({
        where: {
            id: req.params.id
        }
    })
    res.render(await'products/list', {homeProductos: productos, toThousand});
};

exports.editarProducto = async (req, res) => {
    let id = req.params.id;
    let producto = await db.Productos.findByPk(id, {
        include: ['categoria', 'condicion', 'color', 'talle', 'users', 'image']
    })
    res.render('products/edit', {productoEditar: producto, toThousand});
};

exports.modificarProducto = async (req, res) => {
    let id = req.params.id;
    let productosAll = await db.Productos.findAll();
    let productoCambiado = await db.Productos.findByPk(id, {
        include: ['categoria', 'condicion', 'color', 'talle', 'users', 'image']
    });
    await productoCambiado.update({
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        categoria_id: req.body.genero,
        condicion_id: req.body.condicion,
        color_id: req.body.color,
        talle_id: req.body.talle
    })
    res.render('products/list', {homeProductos: productosAll, toThousand});
};

