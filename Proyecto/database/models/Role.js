module.exports = function(sequelize, DataTypes) {
    
    let alias = "Role";

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

    const Role = sequelize.define(alias, cols, config);

    Role.associate = function(models) {

        Role.hasMany(models.User, {
            as: 'users-role',
            foreignKey: 'users_role_id_foreign'
        });
    };

    return Role;
}