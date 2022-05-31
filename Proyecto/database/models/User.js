module.exports = function(sequelize, DataTypes) {
    let alias = 'User';
    let cols = {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mentor_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'users'
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Role, {
            as: 'roles',
            foreignKey: 'role_id'
        });

        User.belongsTo(models.Mentor, {
            as: 'users',
            foreignKey: 'mentor_id'
        });

        User.hasMany(models.Booking, {
            as: 'bookings_user',
            foreignKey: 'user_id'
        });

        User.hasMany(models.Product, {
            as: 'users_products',
            foreignKey: 'user_id'
        });
    };
    return User;
}