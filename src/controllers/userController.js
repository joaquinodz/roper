const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');
let db = require("../../database/models")
let {Op} = require('sequelize')
exports.showRegister = (req, res) => {
    if(!req.session.usuario) {
        res.render('users/login');
    } else {
        res.render('users/profile');
    }
};
exports.showLogin = (req, res) => {
    if(req.session.usuario) {
        res.render('users/profile');
    } else {
        res.render('users/login')
    }
};
exports.processLogin = async (req, res) => {
    let usuarioLogueado = await db.Users.findAll({
        where: {
            email: {[Op.like]: req.body.email}
        }
    })
    usuarioLogueado = usuarioLogueado[0];
    req.session.usuario = usuarioLogueado;
    await res.redirect('/');
    // código súper, súper en proceso
};
exports.processRegister = async (req, res) => {
    const errors = validationResult(req);
    let usuarioEncontrar = await db.Users.findAll({
        where: {
            email: {[Op.like]: req.body.email}
        }
    }) 
    if(errors.isEmpty()) {
        if(usuarioEncontrar == "") {
            let passwordHash = bcrypt.hashSync(req.body.password, Math.floor(Math.random(1) * 10));
            let usuario = await db.Users.create({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                pw_hash: passwordHash,
                image: req.file.filename
            })
        } else {
            res.render('error');
        }
    res.redirect('/user/login')
     } else { 
        res.render('users/register', {errors: errors.errors})
     }
};
exports.showProfile = (req, res) => {
    if(!req.session.usuario) {
        res.redirect('/user/login')
    } else {
        res.render('users/profile');
    }
}