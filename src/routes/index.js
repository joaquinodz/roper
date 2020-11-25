const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.showMainPage);

router.get('/carrito', controller.mostrarCarrito);

router.post('/search', controller.buscar);

module.exports = router;