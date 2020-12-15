const path = require("path");
const { body } = require("express-validator");
const bcrypt = require("bcryptjs");

let db = require("../database/models")

module.exports = {
    register: [
        body("name")
            .notEmpty()
            .isLength({min: 3})
            .withMessage('Ingresar un nombre válido'),
        body("email")
            .notEmpty()
            .isEmail()
            .withMessage('Ingresar un mail válido')
            .bail()
            .custom((value) => {
                return db.Users.findOne({
                    where: {
                        email: value,
                    },
                }).then((user) => {
                    if(user) {
                        return Promise.reject('Email ya registrado!');
                    }
                })
            }),
        body("password")
            .isLength({min: 8})
            .withMessage('Su contraseña es muy corta'),
        ],
    login: [
        body("email")
            .notEmpty()
            .isEmail()
            .withMessage('Email inválido.'),
        body("password")
            .notEmpty()
            .isLength({min: 8})
            .withMessage('Su mail o contraseña no concuerdan.')
        ]
}