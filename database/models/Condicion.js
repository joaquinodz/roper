const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const condicion = sequelize.define('Condicion', {
        estado: dataTypes.STRING
    }, {
        timestamps: false
    })
    condicion.associate = (models => {
        condicion.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "condicion_id"
        });
    })
    return condicion;
}