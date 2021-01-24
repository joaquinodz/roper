const { body } = require("express-validator");;

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
        body("nombre")
            .notEmpty()
            .withMessage("Debes darle un nombre a tu producto!"),
        body("precio")
            .notEmpty()
            .withMessage("Debes darle un precio a tu producto!")
            .isNumeric()
            .withMessage("El precio debe ser numerico!"),
        body("cantidad")
            .notEmpty()
            .withMessage("Debes declarar el stock que tienes de tu producto!")
            .isNumeric()
            .withMessage("La cantidad debe ser numerica!"),
        // body('image')
        //     .custom((value, { req }) => {
        //         // Chequeamos que haya puesto una foto.
        //         if (!value) {
        //             throw new Error('Debes darle una foto a tu producto!');
        //         }

        //         // Que tenga una extensión valida.
        //         if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        //             throw new Error('Solo se permiten formatos de imagen válidos');
        //         }

        //         // Llegado a este punto, está todo bien, podemos continuar.
        //         return true;
        //     }),
    ],
    editarProductos: [
        body("nombre")
            .notEmpty()
            .withMessage("Debes darle un nombre a tu producto!"),
        body('image')
            .custom((value, { req }) => {
                // Si ´value´ existe significa que completó el campo ´image´, ergo, quiere cambiar la imagen...
                if (value) {
                    // Validamos si la extensión del archivo es válida...
                    if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
                        // Abortamos la ejecución de la petición, si no lo es.
                        throw new Error('Solo se permiten formatos de imagen válidos');
                    }
                }
                return true;
            }),
    ],
}