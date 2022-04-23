module.exports = function(sequelize, DataTypes) {
    let alias = "Invoice";

    let cols = {
        invoice_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        class_id: {
            type: DataTypes.INTEGER
        },
        invoice_date: {
            type: DataTypes.DATE
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: 'invoices',
        timestamps: true
    }

    const Invoice = sequelize.define(alias, cols, config);

    return Invoice;
}