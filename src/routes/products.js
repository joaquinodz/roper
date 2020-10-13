const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.listarProductos);

router.get('/carrito', controller.mostrarCarrito);

router.get('/create', controller.crearProducto);

router.get('/edit', controller.editarProducto);

module.exports = router;