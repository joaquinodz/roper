const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const producto = sequelize.define('Producto', {
        nombre: dataTypes.STRING,
        precio: dataTypes.INTEGER,
        cantidad: dataTypes.INTEGER,
        categoria_id: dataTypes.INTEGER,
        condicion_id: dataTypes.INTEGER,
        color_id: dataTypes.INTEGER,
        image_id: dataTypes.INTEGER
    }, {
        timestamps: false
    })
    return producto;
}