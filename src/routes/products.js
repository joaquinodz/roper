const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.listarProductos);

router.get('/create', controller.crearProducto);

router.post('/create', controller.generarProducto)

router.get('/edit', controller.editarProducto);

module.exports = router;