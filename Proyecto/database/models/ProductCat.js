module.exports = function(sequelize, DataTypes) {
    let alias = "ProductCat";

    let cols = {
        productCat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
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
        tableName: 'product_categories',
        timestamps: true
    }

    const ProductCat = sequelize.define(alias, cols, config);

    return ProductCat;
}