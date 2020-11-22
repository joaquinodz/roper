const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const image = sequelize.define('Image', {
        nombre: dataTypes.STRING
    }, {
        timestamps: false
    })
    return image;
}