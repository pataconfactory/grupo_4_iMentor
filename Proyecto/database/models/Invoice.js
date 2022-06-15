module.exports = function(sequelize, DataTypes) {
    let alias = "Invoice";
    let cols = {
        invoice_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        invoice_date: {
            type: DataTypes.DATEONLY,
            defaultValue: sequelize.fn('NOW'),
        },
        payment_method: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        subtotal: {
            type: DataTypes.DECIMAL(20),
            allowNull: false
        },
        iva: {
            type: DataTypes.DECIMAL(20),
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(20),
            allowNull: false
        }
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'invoices'
    }

    const Invoice = sequelize.define(alias, cols, config);

    Invoice.associate = function(models) {
        Invoice.belongsTo(models.Booking, {
            as: 'booking_invoice',
            foreignKey: 'booking_id'
        });
    };
    return Invoice;
}