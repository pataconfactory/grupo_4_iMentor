module.exports = function(sequelize, DataTypes) {
    
    let alias = "Booking";

    let cols = {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER(50),
            allowNull: false
        },
        price_to_pay: {
            type: DataTypes.DECIMAL(20),
            allowNull: false
        }
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'bookings'
    }

    const Booking = sequelize.define(alias, cols, config);

    Booking.associate = function(models) {
        Booking.belongsTo(models.Product, {
            as: 'product_booking',
            foreignKey: 'product_id'
        });

        Booking.belongsTo(models.User, {
            as: 'user_booking',
            foreignKey: 'user_id'
        });

        Booking.hasMany(models.Invoice, {
            as: 'invoices_booking',
            foreignKey: 'booking_id'
        });
    };
    return Booking;
}