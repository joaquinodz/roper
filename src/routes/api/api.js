const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const apiController = require('../../controllers/api/apiController');

router.get('/products', apiController.obtenerProductos);

module.exports = router;
=======
const controller = require('../controllers/api/apiController');

router.get('/products', controller.getAllProducts);

module.exports = router;
>>>>>>> af572a5858aed64aa7095c3a3678fe5abf4c582e
