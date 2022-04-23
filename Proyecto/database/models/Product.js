module.exports = function(sequelize, DataTypes) {
    let alias = "Product";

    let cols = {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING
        },
        productCat_id: {
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
        tableName: 'products',
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {

        Product.belongsTo(models.ProductCat, {
            as: 'productCat',
            foreignKey: 'productCat_id'
        });

        Product.belongsToMany(models.Mentor, {
            as: 'mentors-product',
            through: 'product_mentor',
            foreignKey: 'product_id',
            otherKey: 'mentor_id',
            timestamps: false        
        });

        Product.hasMany(models.Booking, {
            as: 'bookings-product',
            foreignKey: 'product_id'
        });
    };

    return Product;
}