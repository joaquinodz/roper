const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiController');

router.get('/products', controller.obtenerProductos);

module.exports = router;