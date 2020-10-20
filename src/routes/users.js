const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const { body, validationResult } = require('express-validator');

router.get('/login', controller.showLogin);
router.post('/login', controller.processLogin);

router.get('/register', controller.showRegister);
router.post('/register', [
    body("name")
    .isEmpty()
    .isLength({min: 3})
    .withMessage('Ingresar un nombre válido'),
    body("surname")
    .isEmpty()
    .withMessage('Ingresar un apellido válido')
    .isString(),
    body("email")
    .isEmpty()
    .withMessage('No deje el campo vacío')
    .isEmail()
    .withMessage('Ingresar un mail válido'),
    body("password")
    .isEmpty()
    .withMessage('Su contraseña no debe estar vacía')
    .isLength({min: 8})
    .withMessage('Su contraseña es muy corta'),
], controller.processRegister);

module.exports = router;