const express = require('express');
const router = express.Router();

// Constrollers
const staticController = require('../controllers/indexController');

// Route declarations.
router.use('/api', require('./api'));
router.use('/productos', require('./products'));
router.use('/user', require('./users'));

router.get('/', staticController.showMainPage);
router.get('/carrito', staticController.mostrarCarrito);
router.get('/ofertas', staticController.mostrarOfertas);
router.get('/buy', staticController.comprar);
router.post('/search', staticController.buscar);

module.exports = router;
