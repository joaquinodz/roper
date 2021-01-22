const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models")
const { Op } = require('sequelize')

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
    if(!errors.isEmpty()) {
        return res.render('users/login', errors);
    }

    let usuarioLogueado = await db.Users.findOne({
        where: {
            email: {[Op.like]: req.body.email}
        }
    });

    if(usuarioLogueado != undefined) {
        bcrypt.compare(req.body.password, usuarioLogueado.pw_hash, (err, result) => {
            if(err || !result) {
                res.render('users/login', { errors: 'Email/Contraseña inválida.' });
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
};
exports.processRegister = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.render('users/register', {errors: errors.errors})
    }

    try {
        let usuarioEncontrar = await db.Users.findOne({
            where: {
                email: {[Op.like]: req.body.email}
            }
        });

        if(!usuarioEncontrar) {
            let passwordHash = bcrypt.hashSync(req.body.password, Math.floor(Math.random(1) * 10));
            await db.Users.create({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                pw_hash: passwordHash,
                image: req.file.filename
            })
        }
        return res.redirect('/user/login')
    } catch (error) {
        console.log(error);
    }
};
exports.showProfile = (req, res) => {
    if(!req.session.usuario) {
        return res.redirect('/user/login')
    } else {
        return res.render('users/profile');
    }
};
exports.logOut = (req, res) => {
    req.session.destroy();
    return res.redirect('/')
};