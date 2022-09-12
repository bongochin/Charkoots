'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      styleId: {
        type: Sequelize.INTEGER,
        references: {model: 'Styles'}
      },
      origin: {
        type: Sequelize.STRING
      },
      fruitiness: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      body: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sweetness: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: '0'
      },
      tannin: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: '0'
      },
      acidity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      alcohol: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Wines');
  }
};
