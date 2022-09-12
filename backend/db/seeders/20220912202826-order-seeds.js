'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Orders',
			[
				{
          boardId: 1,
          wineId: 1,
				},
        {
          boardId: 1,
          wineId: 2,
				},
        {
          boardId: 1,
          wineId: 3,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Orders', null, {});
	},
};
