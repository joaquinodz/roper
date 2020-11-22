const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const categoria = sequelize.define('Categoria', {
        genero: dataTypes.STRING
    }, {
        timestamps: false
    })
    return categoria;
}