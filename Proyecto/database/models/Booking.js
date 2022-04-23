module.exports = function(sequelize, DataTypes) {
    let alias = "Booking";

    let cols = {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mentor_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        duration_time: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.DECIMAL
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: 'bookings',
        timestamps: true
    }

    const Booking = sequelize.define(alias, cols, config);

    Booking.associate = function(models) {

        Booking.belongsTo(models.Product, {
            as: 'product-booking',
            foreignKey: 'product_id'
        });

        Booking.belongsTo(models.User, {
            as: 'user-booking',
            foreignKey: 'user_id'
        });

        Booking.hasMany(models.Invoice, {
            as: 'invoices-booking',
            foreignKey: 'booking_id'
        });
    };

    return Booking;
}