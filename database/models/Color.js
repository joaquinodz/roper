const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const color = sequelize.define('Color', {
        nombre: dataTypes.STRING
    }, {
        timestamps: false
    })
    color.associate = (models => {
        color.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "color_id"
        });
    });
    return color;
}