exports.showMainPage = (req, res) => res.render('index');

exports.mostrarCarrito = (req, res) => {
    res.render('products/carrito');
};
