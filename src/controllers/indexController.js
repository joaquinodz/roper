const moviesController = require("../../../da/30 de octubre/controllers/moviesController");
let db = require("../../database/models")
const {Op} = require('sequelize');

exports.showMainPage = (req, res) => res.render('index');


exports.mostrarCarrito = (req, res) => {
    res.render('products/carrito');
};

exports.buscar = async(req, res) => {
    let buscar = req.body.search;
    try {
        let result = await db.Productos.findAll({
            where: {
                nombre: {[Op.like]: '%' + buscar + '%'}
            }
        })
        res.json(result);
    } catch(error) {
        console.log(error);
    }
}