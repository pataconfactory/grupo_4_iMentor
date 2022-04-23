module.exports = function(sequelize, DataTypes) {
    let alias = "Class";

    let cols = {
        class_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        mentor_id: {
            type: DataTypes.INTEGER
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
        tableName: 'classes',
        timestamps: true
    }

    const Class = sequelize.define(alias, cols, config);

    return Class;
}