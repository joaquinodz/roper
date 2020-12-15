const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const talle = sequelize.define('Talles', {
        numero: dataTypes.INTEGER
    }, {
        timestamps: false
    })
    talle.associate = (models => {
        talle.hasMany(models.Productos, {
            as: "productos",
            foreignKey: "talle_id"
        });
    });
    return talle;
}