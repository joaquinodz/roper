
exports.listarProductos = (req, res) => {
    res.render('products/listado');
};

exports.mostrarCarrito = (req, res) => {
    res.render('products/carrito');
};

exports.crearProducto = (req, res) => {
    res.render('products/create');
};

exports.editarProducto = (req, res) => {
    res.render('products/edit');
};