const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const talle = sequelize.define('Talle', {
        numero: dataTypes.INTEGER
    }, {
        timestamps: false
    })
    return talle;
}