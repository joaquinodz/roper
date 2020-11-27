const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const producto = sequelize.define('Productos', {
        nombre: dataTypes.STRING,
        precio: dataTypes.INTEGER,
        cantidad: dataTypes.INTEGER,
        categoria_id: dataTypes.INTEGER,
        condicion_id: dataTypes.INTEGER,
        color_id: dataTypes.INTEGER,
        image_id: dataTypes.INTEGER,
        talle_id: dataTypes.INTEGER,
        image: dataTypes.STRING
    }, {
        tableName: 'productos',
        timestamps: false
    })
    producto.associate = (models => {
        producto.belongsTo(models.Categorias, {
            as: "categoria",
            foreignKey: "categoria_id"
        });
        producto.belongsTo(models.Condiciones, {
            as: "condicion",
            foreignKey: "condicion_id"
        });
        producto.belongsTo(models.Colores, {
            as: "color",
            foreignKey: "color_id"
        });
        producto.belongsTo(models.Talles, {
            as: "talle",
            foreignKey: "talle_id"
        });
        producto.belongsToMany(models.Users, {
            as: 'users',
            through: 'producto_user',
            foreignKey: "producto_id",
            otherKey: "user_id",
            timestamps: false
        })
    });
    return producto;
}