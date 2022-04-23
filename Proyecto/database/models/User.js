module.exports = function(sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_email: {
            type: DataTypes.STRING
        },
        user_password: {
            type: DataTypes.STRING
        },
        user_first_name: {
            type: DataTypes.STRING
        },
        user_last_name: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        user_genre: {
            type: DataTypes.STRING
        },
        user_birthday: {
            type: DataTypes.DATE
        }, 
        user_age: {
            type: DataTypes.INTEGER
        },
        user_country: {
            type: DataTypes.STRING
        },
        user_title: {
            type: DataTypes.STRING
        },
        user_avatar: {
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

    return User;
}