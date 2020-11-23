const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const user = sequelize.define('User', {
        name: dataTypes.STRING,
        surname: dataTypes.STRING,
        email: dataTypes.STRING,
        pw_hash: dataTypes.STRING
    }, {
        timestamps: false
    })
    user.associate = (models => {
        user.belongsToMany(models.Producto, {
            as: "productos",
            through: 'producto_user',
            foreignKey: "user_id"
        });
    })
    return user;
}