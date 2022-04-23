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
        booking_date: {
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
        tableName: 'bookings',
        timestamps: true
    }

    const Booking = sequelize.define(alias, cols, config);

    return Booking;
}