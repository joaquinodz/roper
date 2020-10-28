const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');

let readJSON = () => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname + '/data/productsDB.json')));
}

exports.listarProductos = (req, res) => {
    res.render('products/listado');
};

exports.crearProducto = (req, res) => {
    res.render('products/create');
};

exports.generarProducto = (req, res) => {
    let productos = readJSON();
    let producto = {
        id: productos[productos.length-1].id + 1,
        ...req.body
    }

    productos.push(producto);

    productos = JSON.stringify(productos, null, " ");

    fs.writeFileSync(path.resolve(__dirname + "/data/productsDB.json"), productos)

    res.send(productos);
};

exports.editarProducto = (req, res) => {
    res.render('products/edit');
};