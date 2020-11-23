const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const producto = sequelize.define('Producto', {
        nombre: dataTypes.STRING,
        precio: dataTypes.INTEGER,
        cantidad: dataTypes.INTEGER,
        categoria_id: dataTypes.INTEGER,
        condicion_id: dataTypes.INTEGER,
        color_id: dataTypes.INTEGER,
        image_id: dataTypes.INTEGER,
        talle_id: dataTypes.INTEGER
    }, {
        tableName: 'productos',
        timestamps: false
    })
    producto.associate = (models => {
        producto.belongsTo(models.Categoria);
        producto.belongsTo(models.Condicion);
        producto.belongsTo(models.Color);
        producto.belongsTo(models.Talle);
        producto.belongsTo(models.Image);
        producto.belongsToMany(models.User, {
            as: 'users',
            through: 'producto_user',
            foreignKey: "producto_id"
        })
    });
    return producto;
}