const express = require('express');
const router = express.Router();

// Controllers
const controller = require('../../controllers/api/userController');

// Route declarations.
router.get('/:id', controller.obtenerUsuarioPorID);
router.get('/', controller.obtenerUsuarios);

module.exports = router;