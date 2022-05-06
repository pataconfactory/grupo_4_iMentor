module.exports = function(sequelize, DataTypes) {
    
    let alias = "User";

    let cols = {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATE
        }, 
        age: {
            type: DataTypes.INTEGER
        },
        country: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: 'users',
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {

        User.belongsTo(models.Role, {
            as: 'role-user',
            foreignKey: 'role_id'
        });

        User.belongsTo(models.Mentor, {
            as: 'mentor_user_id',
            foreignKey: 'mentor_id'
        });

        User.hasMany(models.Booking, {
            as: 'bookings-user',
            foreignKey: 'user_id'
        });
    };

    return User;
}