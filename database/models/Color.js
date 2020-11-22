const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const color = sequelize.define('Color', {
        nombre: dataTypes.STRING
    }, {
        timestamps: false
    })
    return color;
}