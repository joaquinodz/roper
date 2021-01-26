let db = require("../database/models")
const {Op} = require('sequelize');

exports.showMainPage = (req, res) => res.render('index');


exports.mostrarCarrito = (req, res) => {
    if(req.session.usuario) {
        res.render('products/carrito');
    } else {
        res.redirect('/user/login');
    }
};

exports.mostrarOfertas = (req, res) => {
    return res.render('ofertas');
}

exports.comprar = (req, res) => {
    if(req.session.usuario) {
        return res.render('buy');
    } else {
        res.redirect('user/login')
    }
}

exports.buscar = async(req, res) => {
    let buscar = req.body.search;
    try {
        let result = await db.Productos.findAll({
            where: {
                nombre: {[Op.like]: '%' + buscar + '%'}
            }
        })
        res.render('searchResult', {result, buscar});
    } catch(error) {
        console.log(error);
    }
}