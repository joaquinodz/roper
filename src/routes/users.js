const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/register', controller.showRegisterForm);

router.get('/login', controller.showLoginForm);

module.exports = router;