const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');

let readJson = () => {
    const leer = fs.readFileSync(path.resolve(__dirname + '/db-villera.json'));
    return JSON.parse(leer);
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
    
    // const errors = validationResult(req);
    //if(errors.isEmpty()) {
        let passwordHash = bcrypt.hashSync(req.body.password, Math.floor(Math.random() * 10));

        let errors = validationResult(req);
        let usuario = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: passwordHash,
        }
        
        let usuarios = readJson();
        
        console.log(usuario);
        console.log(errors);

        usuarios.push(usuario);

        usuarios = JSON.stringify(usuarios, null, " ");

        fs.writeFileSync(path.resolve(__dirname + '/db-villera.json'), usuarios)

        res.send(usuarios);
        
        res.redirect('/login');
    // } else { 
    // res.render('register', {errors: errors.errors})
    // }
};