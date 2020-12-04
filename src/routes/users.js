const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const { body } = require('express-validator');

// Yerbas para subir fotitos
const path = require('path');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname + '../../../public/images/users'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })  
var upload = multer({storage: storage});

router.get('/login', controller.showLogin);
router.post('/login', controller.processLogin);

router.get('/register', controller.showRegister);
router.post('/register', upload.single('image'), [
    body("name")
        .notEmpty()
        .isLength({min: 3})
        .withMessage('Ingresar un nombre válido'),
    body("email")
        .notEmpty()
        .isEmail()
        .withMessage('Ingresar un mail válido'),
    body("password")
        .isLength({min: 6})
        .withMessage('Su contraseña es muy corta'),
], controller.processRegister);

router.get('/profile', controller.showProfile);

module.exports = router;