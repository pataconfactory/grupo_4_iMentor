module.exports = function(sequelize, dataTypes) {
    let alias = "Class";

    let Class = sequelize.define(alias, cols, config);

    return Class;
}