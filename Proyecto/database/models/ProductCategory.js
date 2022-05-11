module.exports = function(sequelize, DataTypes) {
    let alias = 'ProductCategory';
    let cols = {
        product_category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'product_categories'
    }

    const ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = function(models) {
        ProductCategory.hasMany(models.Product, {
            as: 'categories',
            foreignKey: 'product_category_id'
        });
    };
    return ProductCategory;
}