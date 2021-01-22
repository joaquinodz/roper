const { body } = require("express-validator");

let db = require("../database/models")

module.exports = {
    register: [
        body("name")
            .notEmpty()
            .isLength({min: 2})
            .withMessage('Ingresar un nombre válido'),
        body("surname")
            .notEmpty()
            .isLength({min: 2})
            .withMessage('Ingresar un apellido válido'),
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
            })
            .withMessage('Email ya registrado!'),
        body("password")
            .isLength({min: 8})
            .withMessage('Su contraseña es muy corta'),
        body('confirm__password')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                  throw new Error('Las contraseñas no coinciden');
                }
            
                // Indicates the success of this synchronous custom validator
                return true;
            }),
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
    ],
    crearProductos: [
        body("nombre").notEmpty(),
    ],
    editarProductos: [
        body("nombre").notEmpty(),
    ]
}