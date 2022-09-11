'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					email: 'claire_dunphy@dunphyclosets.com',
					hashedPassword: bcrypt.hashSync('password1'),
					firstname: 'Claire',
					lastName: 'Dunphy',
					address1: '8500 Beverly Blvd',
					address2: null,
					city: 'Los Angeles',
					state: 'CA',
					zipcode: 90048,
				},
				{
					email: 'jay_pritchett@dunphyclosets.com',
					hashedPassword: bcrypt.hashSync('password2'),
					firstname: 'Jay',
					lastName: 'Pritchett',
					address1: '5723 Morgan Ave',
					address2: null,
					city: 'Los Angeles',
					state: 'CA',
					zipcode: 90011,
				},
				{
					email: 'cameron_tucker@dunphyclosets.com',
					hashedPassword: bcrypt.hashSync('password3'),
					firstname: 'Cameron',
					lastName: 'Tucker',
					address1: '680 E 47th St',
					address2: '2A',
					city: 'Los Angeles',
					state: 'CA',
					zipcode: 90056,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
