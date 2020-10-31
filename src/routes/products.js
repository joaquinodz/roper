const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.listarProductos)

router.get('/create', controller.crearProducto);

router.post('/create', controller.generarProducto)

router.get('/:id/eliminar', controller.eliminarProducto);

router.get('/:id', controller.obtenerProductos);

router.get('/:id/editar', controller.editarProducto);

router.put('/:id/modificar', controller.modificarProducto);

module.exports = router;