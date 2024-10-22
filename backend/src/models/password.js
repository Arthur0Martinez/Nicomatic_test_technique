const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Password extends Model {}
Password.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hashedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Password',
});

module.exports = Password;
