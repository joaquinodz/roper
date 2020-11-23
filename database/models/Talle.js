const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const talle = sequelize.define('Talle', {
        numero: dataTypes.INTEGER
    }, {
        timestamps: false
    })
    talle.associate = (models => {
        talle.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "talle_id"
        });
    });
    return talle;
}