const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validator = require('../middlewares/validator');

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
router.post('/login', validator.login, controller.processLogin);
router.get('/register', controller.showRegister);
router.post('/register', upload.single('image'), validator.register, controller.processRegister);

router.get('/logout', controller.logOut);
router.get('/misproductos', controller.myProducts);
router.get('/profile', controller.showProfile);

module.exports = router;