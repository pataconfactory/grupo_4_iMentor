module.exports = function(sequelize, DataTypes) {
    let alias = "Roles";

    let cols = {
        roles_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Role_name: {
            type: DataTypes.STRING
        },

    }

    let config = {
        tableName: 'Roles',
        timestamps: true
    }

    const Class = sequelize.define(alias, cols, config);

    return Class;
}