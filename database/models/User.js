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
    return talle;
}