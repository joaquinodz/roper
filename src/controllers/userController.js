const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');
let db = require("../../database/models")
let {Op} = require('sequelize')

exports.showRegister = (req, res) => {
    res.render('users/register');
};

exports.showLogin = (req, res) => {
    res.render('users/login');
};

exports.processLogin = async (req, res) => {
    let usuarioLogueado = await db.Users.findAll({
        where: {
            email: {[Op.like]: req.body.email}
        }
    })
    if(usuarioLogueado != "") {
        res.send('bene');
    } else {
        res.send('male')
    }
    // código súper, súper en proceso
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
        res.render('users/register', {errors: errors.errors})
     }
};