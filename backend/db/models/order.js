'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    boardId: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT,
    shippingAddress1: DataTypes.STRING,
    shippingAddress2: DataTypes.STRING,
    shippingCity: DataTypes.STRING,
    shippingState: DataTypes.STRING,
    shippingZipcode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};