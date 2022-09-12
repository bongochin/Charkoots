'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wine.init({
    name: DataTypes.STRING,
    styleId: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    fruitiness: DataTypes.INTEGER,
    body: DataTypes.INTEGER,
    sweetness: DataTypes.INTEGER,
    tannin: DataTypes.INTEGER,
    acidity: DataTypes.INTEGER,
    alcohol: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Wine',
  });
  return Wine;
};
