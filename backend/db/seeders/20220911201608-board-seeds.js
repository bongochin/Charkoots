'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Boards',
			[
				{
					name: 'Rat Pack',
					description:
						"It's what this generation calls it a GOAT. Best consumed with your grandapa to discuss how 'grand' things were back then",
					imageUrl:
						'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/WebsiteM_C8.262_1080x1080.jpg?v=1602388225',
				},
				{
					name: 'Mama Maglione',
					description:
						"We don't know who she is, but wouldn't someone named like her know some good eats?",
					imageUrl:
						'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2095_1080x1080.jpg?v=1602445399',
				},
				{
					name: 'I Need a Doctor',
					description:
						"Please consult with your primary care if your heart can handle this. Just kidding, it (probably) won't kill you.",
					imageUrl:
						'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/Meat-Only-Board_1050x1050.jpg?v=1599857692',
				},
				{
					name: 'The Number 4',
					description:
						'Time-tested, fail-proof combination that always seems to be the best seller at every deli.',
					imageUrl:
						'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2093_1080x1080.jpg?v=1602444573',
				},
				{
					name: 'The Magnum',
					description:
						'This board is so good that you might as well go for a magnum bottle, just for yourself. Disclaimer: We only pair you with one regular-size bottles',
					imageUrl:
						'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/cheeseonly_1080x1080.jpg?v=1602386457',
				},
				{
					name: 'I Warned Ya!',
					description:
						"It's packed with flavor, heat and spices that I doubt you're able to handle it. Wait, are you sure? Well, don't tell me I didn't warned ya!",
					imageUrl:
						'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2092_1080x1080.jpg?v=1602443864',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Boards', null, {});
	},
};
