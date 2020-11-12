const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');

let readJson = () => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname + '/data/usersDB.json')));
}

exports.showRegister = (req, res) => {
    res.render('users/register');
};

exports.showLogin = (req, res) => {
    res.render('users/login');
};

exports.processLogin = (req, res) => {

};

exports.processRegister = (req, res) => {
    
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        let passwordHash = bcrypt.hashSync(req.body.password, Math.floor(Math.random() * 10));

        let errors = validationResult(req);
        let usuario = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: passwordHash,
        }
        
        let usuarios = readJson();
        
    
        usuarios.push(usuario);

        usuarios = JSON.stringify(usuarios, null, " ");

        fs.writeFileSync(path.resolve(__dirname + '/data/usersDB.json'), usuarios)

        res.send(usuarios);
        
        res.redirect('/login');
     } else { 
         res.render('register', {errors: errors.errors})
     }
};