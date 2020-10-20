const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/login', controller.showLogin);
router.post('/login', controller.processLogin);

router.get('/register', controller.showRegister);
router.post('/register', controller.processRegister);

module.exports = router;