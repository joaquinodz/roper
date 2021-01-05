const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/productController');
const productosResource = require('../../request/productsResource');

router.get('/:id', controller.obtenerProductoPorID);
router.get('/', controller.obtenerProductos);

router.get('/naranja/products', async(req, res) => {
    let productos = await productosResource.getAll()
    res.json(productos.data);   
})

module.exports = router;