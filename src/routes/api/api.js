const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiController');
const productosResource = require('../../request/productsResource');

router.get('/products', controller.obtenerProductos);

router.get('/naranja/products', async(req, res) => {
    let productos = await productosResource.getAll()
    res.json(productos.data);   
})

module.exports = router;