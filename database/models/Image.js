const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const image = sequelize.define('Images', {
        nombre: dataTypes.STRING
    }, {
        timestamps: false
    })
    return image;
}