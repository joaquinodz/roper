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
    let productos = readJSON();
    let productoModificado = req.body;
    if(productos.id == productoModificado.id){
        let nuevoProducto = [
            productos.id = productoModificado.id,
            productos.nombre = productoModificado.nombre,
            productos.precio = productoModificado.precio,
            productos.cantidad = productoModificado.cantidad,
            productos.genero = productoModificado.genero,
            productos.condicion = productoModificado.condicion,
            productos.color = productoModificado.color,
            productos.image = productoModificado.image,
            productos.talle = productoModificado.talle
        ]
        res.send(nuevoProducto);
    } else {
        res.send('Producto no encontrado.');
    }
};