module.exports = function(sequelize, DataTypes) {
    let alias = "booking";

    let cols = {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        StartDate: {
            type: DataTypes.DATE
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

    }

    let config = {
        tableName: 'booking',
        timestamps: true
    }

    const Class = sequelize.define(alias, cols, config);

    return Class;
}