module.exports = function(sequelize, DataTypes) {
    let alias = "Product";

    let cols = {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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

    return Product;
}