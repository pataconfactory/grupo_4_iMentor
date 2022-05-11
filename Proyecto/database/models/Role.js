module.exports = function(sequelize, DataTypes) {
    let alias = 'Role';
    let cols = {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'roles'
    }

    const Role = sequelize.define(alias, cols, config);

    Role.associate = function(models) {
        Role.hasMany(models.User, {
            as: 'roles',
            foreignKey: 'role_id'
        });
    };
    return Role;
};