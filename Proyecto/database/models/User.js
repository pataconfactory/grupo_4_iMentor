module.exports = function(sequelize, dataTypes) {
    let alias = "User";

    let User = sequelize.define(alias, cols, config);

    return User;
}