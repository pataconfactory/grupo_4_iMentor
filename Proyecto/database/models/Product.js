module.exports = function(sequelize, DataTypes) {
    let alias = 'Product';
    let cols = {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        product_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mentor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        day: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(20),
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_image: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'products'
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Mentor, {
            as: 'mentors',
            foreignKey: 'mentor_id'   
        });

        Product.belongsTo(models.ProductCategory, {
            as: 'categories',
            foreignKey: 'product_category_id'
        });

        Product.belongsTo(models.User, {
            as: 'users_products',
            foreignKey: 'user_id'
        });

        Product.hasMany(models.Booking, {
            as: 'bookings_product',
            foreignKey: 'product_id'
        });
    };
    return Product;
}