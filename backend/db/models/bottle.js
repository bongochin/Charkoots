'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bottle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bottle.init({
    name: DataTypes.STRING,
    wineId: DataTypes.INTEGER,
    region: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    size: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bottle',
  });
  return Bottle;
};
