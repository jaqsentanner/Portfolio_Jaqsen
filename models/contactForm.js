const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Contact extends Model {}

Contact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        inquirer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate: {
                isEmail:true,
            },
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName:'contactForm',
    }
);

module.exports = Contact;