const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');
let db = require("../database/models")
let {Op} = require('sequelize')
exports.showRegister = (req, res) => {
    if(!req.session.usuario) {
        res.render('users/register');
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
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        let usuarioLogueado = await db.Users.findAll({
            where: {
                email: {[Op.like]: req.body.email}
            }
        })
        usuarioLogueado = usuarioLogueado[0];
        if(usuarioLogueado != undefined) {
            bcrypt.compare(req.body.password, usuarioLogueado.pw_hash, (err, result) => {
                if(err || !result) {
                    res.render('users/login', {errors: 'Email/Contraseña inválida.'});
                    return false;
                } else {
                    req.session.usuario = usuarioLogueado;
                    res.redirect('/');
                    return true;
                }
            });
        } else {
            res.render('users/login', {errors: 'Email no encontrado.'});
        }
    } else {
    res.render('users/login', errors);
    }
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
            await db.Users.create({
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
};
exports.logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/')
};