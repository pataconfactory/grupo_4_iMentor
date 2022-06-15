module.exports = function(sequelize, DataTypes) {
    
    let alias = "Contact";

    let cols = {
        contact_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contact_user_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        contact_user_mail: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        contact_message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'contact'
    }

    const Contact = sequelize.define(alias, cols, config);

    Contact.associate = function(models) {
        Contact.belongsTo(models.User, {
            as: 'user_contact',
            foreignKey: 'user_id'
        });
    };
    return Contact;
}