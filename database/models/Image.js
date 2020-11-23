const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const image = sequelize.define('Images', {
        nombre: dataTypes.STRING
    }, {
        timestamps: false
    })
    image.associate = (models => {
        image.hasOne(models.Productos, {
            as: 'productos',
            foreignKey: 'image_id'
        })
    })
    return image;
}