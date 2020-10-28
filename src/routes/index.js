const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.showMainPage);

router.get('/carrito', controller.mostrarCarrito)

module.exports = router;