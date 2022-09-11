'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boardId: {
        type: Sequelize.INTEGER,
        references: {model: 'Boards'}
      },
      wineId: {
        type: Sequelize.INTEGER,
        references: {model: 'Wines'}
      },
      totalPrice: {
        type: Sequelize.FLOAT
      },
      shippingAddress1: {
        type: Sequelize.STRING
      },
      shippingAddress2: {
        type: Sequelize.STRING
      },
      shippingCity: {
        type: Sequelize.STRING
      },
      shippingState: {
        type: Sequelize.STRING
      },
      shippingZipcode: {
        type: Sequelize.INTEGER(5)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
