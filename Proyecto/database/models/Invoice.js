module.exports = function(sequelize, DataTypes) {
    let alias = "Invoice";

    let cols = {
        invoice_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_id: {
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

    Invoice.associate = function(models) {

        Invoice.belongsTo(models.Booking, {
            as: 'booking-invoice',
            foreignKey: 'booking_id'
        });
    };

    return Invoice;
}