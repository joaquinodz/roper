let db = require("../../database/models")
const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');
const { json } = require('express');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let readJSON = () => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname + '/data/productsDB.json')));
};

exports.obtenerProductos = (req, res) => {
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
    producto = {
        id: productos[productos.length-1].id + 1,
        ...req.body
    }; 
    productos.push(producto);
    productos = JSON.stringify(productos, null, " ");
    fs.writeFileSync(path.resolve(__dirname + "/data/productsDB.json"), productos)
    res.render('products/list', {homeProductos: readJSON(), toThousand});
};

exports.eliminarProducto = (req, res) => {
    // agarro el db en una variable
    let productos = readJSON();
    // filter con el id que viene por barra de búsqueda para sacar el producto encontrado
    let newDB = productos.filter(producto => producto.id != req.params.id);
    // stringify al newdb
    productos = JSON.stringify(newDB, null, " ");
    // sobreescribo la db con la variable nueva
    fs.writeFileSync(path.resolve(__dirname + "/data/productsDB.json"), productos)
    res.render('products/list', {homeProductos: readJSON(), toThousand});
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
            // reemplazo todos las variables del producto encontrado con las que vienen por body
                id = req.params.id,
                producto.nombre = productoModificado.nombre,
                producto.precio = productoModificado.precio,
                producto.cantidad =  productoModificado.cantidad,
                producto.genero = productoModificado.genero,
                producto.condicion = productoModificado.condicion,
                producto.color = productoModificado.color,
                producto.image,
                producto.talle = productoModificado.talle
                // stringify al db con los nuevos datos
                productos = JSON.stringify(productos, null, " ");
                // sobreescribo la db
                fs.writeFileSync(path.resolve(__dirname + "/data/productsDB.json"), productos)
                // rendereo productos nuevos con el producto modificado
                res.render('products/list', {homeProductos: readJSON(), toThousand});
        }
    })
};
exports.jsontest = async (req, res) => {
    try {
        let generos = await db.Categorias.findAll()
        res.json(generos);
    } catch(error) {
        console.log(error);
    }
}