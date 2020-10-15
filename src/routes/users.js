const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/register', controller.showRegister);
router.get('/login', controller.showLogin);

module.exports = router;