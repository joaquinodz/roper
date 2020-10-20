const fs = require('fs');

exports.showRegister = (req, res) => {
    res.render('users/register');
};

exports.showLogin = (req, res) => {
    res.render('users/login');
};

exports.processLogin = (req, res) => {

};

exports.processRegister = (req, res) => {
    
    const { name, surname, email, password, confirm__password } = req.body;

    

};