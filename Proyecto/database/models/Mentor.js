module.exports = function(sequelize, DataTypes) {
    let alias = 'Mentor';
    let cols = {
        mentor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        hour_price: {
            type: DataTypes.DECIMAL(20),
            allowNull: false
        },
        cbu: {
            type: DataTypes.STRING(50)
        },
        bank: {
            type: DataTypes.STRING(50)
        }
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'mentors',
    }

    const Mentor = sequelize.define(alias, cols, config);

    Mentor.associate = function(models) {
        Mentor.hasMany(models.User, {
            as: 'users',
            foreignKey: 'mentor_id',
        });

        Mentor.hasMany(models.Product, {
            as: 'mentors',
            foreignKey: 'mentor_id'   
        });
    };

    return Mentor;
}