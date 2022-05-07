module.exports = function(sequelize, DataTypes) {
    
    let alias = "Mentor";

    let cols = {
        mentor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING
        },
        hour_price: {
            type: DataTypes.DECIMAL
        },
        CBU: {
            type: DataTypes.STRING
        },
        bank: {
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
        tableName: 'mentors',
        timestamps: true
    }

    const Mentor = sequelize.define(alias, cols, config);

    Mentor.associate = function(models) {

        Mentor.belongsTo(models.User, {
            as: 'mentor_user_id',
            foreignKey: 'mentor_id'
        });

        Mentor.belongsToMany(models.Product, {
            as: 'products_mentor',
            through: 'product_mentor',
            foreignKey: 'mentor_id',
            otherKey: 'product_id',
            timestamps: false
        });
        
    };

    return Mentor;
}