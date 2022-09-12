'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Wines',
			[
        // 1. Sparkling
				{
          name: 'Cava',
          styleId: 1,
          origin: 'Spain',
          fruitiness: 3,
          body: 1,
          sweetness: 2,
          acidity: 4,
          alcohol: 2
        },
        {
          name: 'Champagne',
          styleId: 1,
          origin: 'Champagne, France',
          fruitiness: 2,
          body: 1,
          sweetness: 1,
          acidity: 5,
          alcohol: 2
        },
        {
          name: 'Prosecco',
          styleId: 1,
          origin: 'Northern Italy',
          fruitiness: 4,
          body: 1,
          sweetness: 2,
          acidity: 4,
          alcohol: 3
        },
        // 2. Light-bodied White
        {
          name: 'Pinot Gris',
          styleId: 2,
          origin: 'France and Italy',
          fruitiness: 2,
          body: 2,
          sweetness: 2,
          acidity: 3,
          alcohol: 3
        },
        {
          name: 'Sauvignon Blanc',
          styleId: 2,
          origin: 'France',
          fruitiness: 5,
          body: 1,
          sweetness: 2,
          acidity: 5,
          alcohol: 3
        },
        // 3. Full-bodied White
        {
          name: 'Chardonnay',
          styleId: 3,
          origin: 'France',
          fruitiness: 4,
          body: 4,
          sweetness: 2,
          acidity: 3,
          alcohol: 4
        },
        {
          name: 'Viognier',
          styleId: 3,
          origin: 'Southern France',
          fruitiness: 5,
          body: 3,
          sweetness: 3,
          acidity: 2,
          alcohol: 4
        },
        // 4. Aromatic White
        {
          name: 'Muscat Blanc',
          styleId: 4,
          origin: 'Greece and Italy',
          fruitiness: 5,
          body: 1,
          sweetness: 4,
          acidity: 4,
          alcohol: 1
        },
        {
          name: 'Riesling',
          styleId: 4,
          origin: 'Germany',
          fruitiness: 5,
          body: 1,
          sweetness: 3,
          acidity: 5,
          alcohol: 1
        },
        // 5. Rosé
        {
          name: 'Rosé',
          styleId: 5,
          origin: 'Everywhere',
          fruitiness: 5,
          body: 3,
          sweetness: 2,
          acidity: 3,
          alcohol: 3
        },
        // 6. Light-bodied Red
        {
          name: 'Pinot Noir',
          styleId: 6,
          origin: 'France',
          fruitiness: 4,
          body: 3,
          tannin: 2,
          acidity: 4,
          alcohol: 3
        },
        // 7. Medium-bodied Red
        {
          name: 'Carignan',
          styleId: 7,
          origin: 'Spain',
          fruitiness: 5,
          body: 3,
          tannin: 3,
          acidity: 4,
          alcohol: 4
        },
        {
          name: 'Merlot',
          styleId: 7,
          origin: 'France',
          fruitiness: 4,
          body: 4,
          tannin: 4,
          acidity: 3,
          alcohol: 4
        },
        {
          name: 'Zinfandel',
          styleId: 7,
          origin: 'Croatia',
          fruitiness: 5,
          body: 5,
          tannin: 3,
          acidity: 2,
          alcohol: 5
        },
        // 8. Full-bodied Red
        {
          name: 'Bordeaux Blend',
          styleId: 8,
          origin: 'France',
          fruitiness: 4,
          body: 5,
          tannin: 5,
          acidity: 3,
          alcohol: 4
        },
        {
          name: 'Cabernet Sauvignon',
          styleId: 8,
          origin: 'France',
          fruitiness: 4,
          body: 5,
          tannin: 4,
          acidity: 3,
          alcohol: 4
        },
        {
          name: 'Malbec',
          styleId: 8,
          origin: 'South West France',
          fruitiness: 5,
          body: 4,
          tannin: 3,
          acidity: 3,
          alcohol: 4
        },
        {
          name: 'Syrah',
          styleId: 8,
          origin: 'France',
          fruitiness: 5,
          body: 5,
          tannin: 3,
          acidity: 4,
          alcohol: 4
        },
        // 9. Dessert
        {
          name: 'Port',
          styleId: 9,
          origin: 'Portugal',
          fruitiness: 5,
          body: 5,
          tannin: 5,
          acidity: 3,
          alcohol: 5
        },
        {
          name: 'Sherry',
          styleId: 9,
          origin: 'Spain',
          fruitiness: 2,
          body: 3,
          sweetness: 3,
          acidity: 4,
          alcohol: 5
        },
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Wines', null, {});
	},
};
