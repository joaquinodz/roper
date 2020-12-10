const express = require('express');
const router = express.Router();
const apiController = require('../../controllers/api/apiController');

router.get('/products', apiController.obtenerProductos);

module.exports = router;
