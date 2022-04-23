module.exports = function(sequelize, DataTypes) {
    let alias = "Rol";

    let cols = {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: DataTypes.STRING
        },

    }

    let config = {
        tableName: 'roles',
        timestamps: true
    }

    const Roles = sequelize.define(alias, cols, config);

    return Roles;
}