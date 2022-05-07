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
        product_category_id: {
            type: DataTypes.INTEGER
        },
        product_description: {
            type: DataTypes.STRING
        },
        day: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.TIME
        },
        price: {
            type: DataTypes.DECIMAL
        },
        duration: {
            type: DataTypes.INTEGER
        },
        product_image: {
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
        tableName: 'products',
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {

        Product.belongsTo(models.ProductCat, {
            as: 'productCat',
            foreignKey: 'product_category_id'
        });

        Product.belongsToMany(models.Mentor, {
            as: 'mentors_product',
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