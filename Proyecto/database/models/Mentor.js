module.exports = function(sequelize, DataTypes) {
    
    let alias = "Mentor";

    let cols = {
        mentor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mentor_email: {
            type: DataTypes.STRING
        },
        mentor_password: {
            type: DataTypes.STRING
        },
        mentor_first_name: {
            type: DataTypes.STRING
        },
        mentor_last_name: {
            type: DataTypes.STRING
        },
        mentor_user_name: {
            type: DataTypes.STRING
        },
        mentor_genre: {
            type: DataTypes.STRING
        },
        mentor_birthday: {
            type: DataTypes.DATE
        }, 
        mentor_age: {
            type: DataTypes.INTEGER
        },
        mentor_country: {
            type: DataTypes.STRING
        },
        specialization: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING(400)
        },
        mentor_avatar: {
            type: DataTypes.STRING
        },
        hour_price: {
            type: DataTypes.DECIMAL
        },
        mentor_CBU: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: 'mentors',
        timestamps: true
    }

    const Mentor = sequelize.define(alias, cols, config);

    Mentor.associate = function(models) {

        Mentor.belongsToMany(models.User, {
            as: 'users-mentor',
            through: 'user_mentor',
            foreignKey: 'mentor_id',
            otherKey: 'user_id',
            timestamps: false
        });

        Mentor.belongsToMany(models.Product, {
            as: 'products-mentor',
            through: 'product_mentor',
            foreignKey: 'mentor_id',
            otherKey: 'product_id',
            timestamps: false
        });
    };

    return Mentor;
}