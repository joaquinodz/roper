const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const categoria = sequelize.define('Categoria', {
        genero: dataTypes.STRING
    }, {
        timestamps: false
    })
    categoria.associate = (models => {
        categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "categoria_id"
        });
    })
    return categoria;
}