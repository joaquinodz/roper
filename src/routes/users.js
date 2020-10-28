const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const { body } = require('express-validator');

router.get('/login', controller.showLogin);
router.post('/login', controller.processLogin);

router.get('/register', controller.showRegister);
router.post('/register', [
    body("name")
    .notEmpty()
    .isLength({min: 3})
    .withMessage('Ingresar un nombre válido'),
    body("email")
    .notEmpty()
    .isEmail()
    .withMessage('Ingresar un mail válido'),
    body("password")
    .isLength({min: 8})
    .withMessage('Su contraseña es muy corta'),
], controller.processRegister);

module.exports = router;