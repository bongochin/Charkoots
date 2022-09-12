'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bottles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      wineId: {
        type: Sequelize.INTEGER,
        references: {model: 'Wines'}
      },
      region: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      imageUrl: {
        type: Sequelize.STRING(255)
      },
      size: {
        type: Sequelize.INTEGER,
        defaultValue: 720
      },
      price: {
        type: Sequelize.FLOAT(4,2)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bottles');
  }
};
