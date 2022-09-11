'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Categories', [
    { name: 'Meats' },
    { name: 'Cheeses' },
    { name: 'Crackers' },
    { name: 'Fruits' },
    { name: 'Nuts' },
    { name: 'Spreads' },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
