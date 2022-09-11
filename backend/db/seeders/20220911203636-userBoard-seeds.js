'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'UserBoards',
			[
				{
					userId: 1,
					boardId: 1,
				},
				{
					userId: 1,
					boardId: 2,
				},
				{
					userId: 1,
					boardId: 3,
				},
				{
					userId: 1,
					boardId: 4,
				},
				{
					userId: 1,
					boardId: 5,
				},
				{
					userId: 1,
					boardId: 6,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('UserBoards', null, {});
	},
};
