'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};