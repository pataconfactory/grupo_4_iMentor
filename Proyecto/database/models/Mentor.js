module.exports = function(sequelize, dataTypes) {
    let alias = "Mentor";

    let Mentor = sequelize.define(alias, cols, config);

    return Mentor;
}