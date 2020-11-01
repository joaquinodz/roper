const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');
const { json } = require('express');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let readJSON = () => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname + '/data/productsDB.json')));
};

exports.obtenerProductos = (req, res) => {
    // res.render('products/listado');
    let productos = readJSON();
    let id = req.params.id;
    let encontradeng = productos.find(producto => producto.id == id);
    res.render('products/listado', {productoEspecifico: encontradeng, toThousand});
};

exports.listarProductos = (req, res) => {
    res.render('products/list', {homeProductos: readJSON(), toThousand});
}

exports.crearProducto = (req, res) => {
    res.render('products/create');
};

exports.generarProducto = (req, res) => {
    let productos = readJSON();
    let producto = {
        id: productos[productos.length-1].id + 1,
        ...req.body
    };
    productos.push(producto);
    productos = JSON.stringify(productos, null, " ");
    fs.writeFileSync(path.resolve(__dirname + "/data/productsDB.json"), productos)
    res.send(productos);
};

exports.eliminarProducto = (req, res) => {
    let productos = readJSON();
    let id = req.params.id;
    let productoElim = productos.filter(producto => producto.id != id);
    res.render('products/list', {homeProductos: productoElim, toThousand});
    
};

exports.editarProducto = (req, res) => {
    let productos = readJSON();
    let id = req.params.id;
    let encontradeng = productos.find(producto => producto.id == id);
    res.render('products/edit', {productoEditar: encontradeng, toThousand});
};

exports.modificarProducto = (req, res) => {
     // agarro el db en una variable
    let productos = readJSON();
     // agarro valores de body
    let productoModificado = req.body;
    // foreach para buscar en todos los objetos de db
    productos.forEach(producto => { 
        if(producto.id == req.params.id) {
                id = req.params.id,
                producto.nombre = productoModificado.nombre,
                producto.precio = productoModificado.precio,
                producto.cantidad =  productoModificado.cantidad,
                producto.genero = productoModificado.genero,
                producto.condicion = productoModificado.condicion,
                producto.color = productoModificado.color,
                producto.image,
                producto.talle = productoModificado.talle
                productos = JSON.stringify(productos, null, " ");
                fs.writeFileSync(path.resolve(__dirname + "/data/productsDB.json"), productos)
                res.render('products/list', {homeProductos: readJSON(), toThousand});
        }
    })
};