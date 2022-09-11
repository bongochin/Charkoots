'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'BoardItems',
			[
        // 1. "Rat Pack"
				{ boardId: 1, itemId: 1 }, { boardId: 1, itemId: 3 }, { boardId: 1, itemId: 6 }, { boardId: 1, itemId: 15 }, { boardId: 1, itemId: 10 }, { boardId: 1, itemId: 12 }, { boardId: 1, itemId: 21 }, { boardId: 1, itemId: 26 }, { boardId: 1, itemId: 33 }, { boardId: 1, itemId: 42 },
        // 2. "Mama Maglione"
				{ boardId: 2, itemId: 5 }, { boardId: 2, itemId: 8 }, { boardId: 2, itemId: 1 }, { boardId: 2, itemId: 11 }, { boardId: 2, itemId: 14 }, { boardId: 2, itemId: 16 }, { boardId: 2, itemId: 20 }, { boardId: 2, itemId: 25 }, { boardId: 2, itemId: 36 }, { boardId: 2, itemId: 43 },
				// 3. "I Need a Doctor"
        { boardId: 3, itemId: 3 }, { boardId: 3, itemId: 4 }, { boardId: 3, itemId: 7 }, { boardId: 3, itemId: 13 }, { boardId: 3, itemId: 9 }, { boardId: 3, itemId: 12 }, { boardId: 3, itemId: 24 }, { boardId: 3, itemId: 32 }, { boardId: 3, itemId: 39 }, { boardId: 3, itemId: 47 },
				// 4. "The Number 4"
        { boardId: 4, itemId: 2 }, { boardId: 4, itemId: 4 }, { boardId: 4, itemId: 6 }, { boardId: 4, itemId: 9 }, { boardId: 4, itemId: 12 }, { boardId: 4, itemId: 13 }, { boardId: 4, itemId: 17 }, { boardId: 4, itemId: 31 }, { boardId: 4, itemId: 40 }, { boardId: 4, itemId: 45 },
				// 5. "The Magnum"
        { boardId: 5, itemId: 8 }, { boardId: 5, itemId: 7 }, { boardId: 5, itemId: 3 }, { boardId: 5, itemId: 9 }, { boardId: 5, itemId: 11 }, { boardId: 5, itemId: 15 }, { boardId: 5, itemId: 23 }, { boardId: 5, itemId: 28 }, { boardId: 5, itemId: 36 }, { boardId: 5, itemId: 46 },
				// 6. "I Warned Ya!"
        { boardId: 6, itemId: 7 }, { boardId: 6, itemId: 6 }, { boardId: 6, itemId: 4 }, { boardId: 6, itemId: 11 }, { boardId: 6, itemId: 12 }, { boardId: 6, itemId: 10 }, { boardId: 6, itemId: 20 }, { boardId: 6, itemId: 27 }, { boardId: 6, itemId: 35 }, { boardId: 6, itemId: 41 },

			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('BoardItems', null, {});
	},
};
