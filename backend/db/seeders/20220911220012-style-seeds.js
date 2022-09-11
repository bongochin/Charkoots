'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Styles',
			[
				{ name: 'Sparking' },
				{ name: 'Light-bodied White' },
				{ name: 'Full-bodied White' },
				{ name: 'Aromatic White' },
				{ name: 'Rosé' },
				{ name: 'Light-bodied Red' },
				{ name: 'Medium-bodied Red' },
				{ name: 'Full-bodied Red' },
				{ name: 'Dessert' },
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Styles', null, {});
	},
};
