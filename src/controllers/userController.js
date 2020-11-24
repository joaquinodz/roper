const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');
let db = require("../../database/models")

exports.showRegister = (req, res) => {
    res.render('users/register');
};

exports.showLogin = (req, res) => {
    res.render('users/login');
};

exports.processLogin = (req, res) => {

};

exports.processRegister = async (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        let passwordHash = bcrypt.hashSync(req.body.password, Math.floor(Math.random() * 10));
        let usuario = await db.Users.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            pw_hash: passwordHash
        })
    res.json(usuario);
     } else { 
        res.render('register', {errors: errors.errors})
     }
};