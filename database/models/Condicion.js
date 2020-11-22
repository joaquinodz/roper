const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const condicion = sequelize.define('Condicion', {
        estado: dataTypes.STRING
    }, {
        timestamps: false
    })
    return condicion;
}