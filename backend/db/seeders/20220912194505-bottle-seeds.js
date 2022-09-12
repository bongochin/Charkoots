'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Bottles',
			[
        // 1. Cava
				{
					name: 'Gramona Imperial Brut 2015',
          wineId: 1,
          region: 'Spain',
          description: 'neutral body, slightly acidic and lightly fizzy. tree fruit, citrus, ageing, yeasty, earthy notes',
          imageUrl: 'https://images.vivino.com/thumbs/xuuSnf4WQKOJllwX5KbymA_pb_x600.png',
          price: 36.50
				},
        {
					name: 'Juve & Camps Cava Gran Reserva Brut nature Reserva de la Familia',
          wineId: 1,
          region: 'Spain',
          description: 'neutral body, slightly acidic and medium fizzy. tree fruit, citrus, ageing, vegetal, spicy notes',
          imageUrl: 'https://images.vivino.com/thumbs/iTGNxjTUSmKGYNuijyPI9g_pb_x600.png',
          price: 19.99
				},
        // 2. Champagne
        {
					name: 'Philippe Fourrier Reserve Champagne N.V',
          wineId: 2,
          region: 'France',
          description: '"Farmer fizz” (grower Champagne) is all the rage, and this is your chance to get in on the action! Take home a silver medal-winning Réserve from fifth-generation family producer Philippe Fourrier!',
          imageUrl: 'https://images.vivino.com/thumbs/duhVqBKxRPmI9ut9vVf5fQ_pb_x600.png',
          price: 60.00
				},
        {
					name: 'Gardet Blanc de Noirs Brut Champagne Premier Cru',
          wineId: 2,
          region: 'France',
          description: 'This 100% Premier Cru Blanc de Noirs Champagne is earning so many 5- and 4-star ratings, it’s almost guaranteed to impress everyone!',
          imageUrl: 'https://images.vivino.com/thumbs/3eTS7yvgRSqn93rG3ZuMyA_pb_x600.png',
          price: 70.00
				},
        // 3. Prosecco
        {
					name: 'Altaneve Prosecco Superiore N.V',
          wineId: 3,
          region: 'Italy',
          description: 'This prosecco would fall under "luxury". It\'s for those who are all about elegance. It\'s a good wine. The winemaker is very passionate and wants to make the best prosecco around. Notes of honeysuckle, pear, and flowers. It\'s a vegan wine and all natural. This one tends to be a hit at events',
          imageUrl: 'https://images.vivino.com/thumbs/4nTrj4zSSHKm57ti9Mh-6Q_pb_x600.png',
          price: 32.99
				},
        {
					name: 'Villa Degli Olmi Corte dei Rovi Prosecco N.V',
          wineId: 3,
          region: 'Italy',
          description: 'Great value for money! Can be considered an entry level of wines 3x the price. Buy with confidence! citrus green apple apple lemon pear peach',
          imageUrl: 'https://images.vivino.com/thumbs/w4ffwm6CSteyAWnvQOV86w_pb_x600.png',
          price: 30.00
				},
        // 4. Pinot Gris
        {
					name: 'Hugel Classic Pinot Gris 2018',
          wineId: 4,
          region: 'France',
          description: 'Honey, floral, peach. Easy drinking. Not a lot of acid. But some. Great with some Gouda and crackers. Pre-game with this stuff. Total winner.',
          imageUrl: 'https://images.vivino.com/thumbs/QFnPYlruSfWVeNUpKalCJA_pb_x600.png',
          price: 22.99
				},
        {
					name: 'Bertani Due Uve Bianca 2020',
          wineId: 4,
          region: 'Italy',
          description: 'Pale yellow color. Lovely fresh, fruity nose with citrus, grapefruit, pomello, gooseberry. Pleasant minerality, ample acidity, just a hint of citrus bitterness.',
          imageUrl: 'https://images.vivino.com/thumbs/kKb4vmUMTHu1kxGGB2Sw_Q_pb_x600.png',
          price: 19.99
				},
        // 5. Sauvignon Blanc
        {
					name: 'Fire Road Sauvignon Blanc 2021',
          wineId: 5,
          region: 'New Zealand',
          description: 'Fresh green Apple, melon, tropical fruit. Tried the lower alcohol version which did seem very light but still a palatable drop.',
          imageUrl: 'https://images.vivino.com/thumbs/2EjYzDL_TOqfhna9tHMrQA_pb_x600.png',
          price: 16.99
				},
        {
					name: 'Long Shadows Cymbal Sauvignon Blanc 2020',
          wineId: 5,
          region: 'USA',
          description: 'Nose is vibrant - lemongrass, citrus. Palate is bright with racy acidity and notes of tropical flavors of mango, papaya. Subtle salinity and wet stone. Great wine.',
          imageUrl: 'https://images.vivino.com/thumbs/H0_elOPRQ9SV_0_MSTN8_w_pb_x600.png',
          price: 39.99
				},
        // 6. Chardonnay
        {
					name: 'Rombauer Vineyards Chardonnay 2020',
          wineId: 6,
          region: 'USA',
          description: 'A favorite from Cali. Full of taste and will become better with the years. Notes of oak chard apple peach melon stone minerals',
          imageUrl: 'https://images.vivino.com/thumbs/wofRa9S3T2eqYtwZlpx9IA_pb_x600.png',
          price: 39.95
				},
        {
					name: 'Corsin Vieilles Vignes Pouilly-Fuisse 2018',
          wineId: 6,
          region: 'France',
          description: 'Beautiful! Similar to the 17 with carefully balanced limestone, chalk, vanilla and butter',
          imageUrl: 'https://images.vivino.com/thumbs/k26nWOQ7TVS4rqUPE7dzsA_pb_x600.png',
          price: 34.99
				},
        // 7. Viognier
        {
					name: 'Tablas Creek Vineyard Cotes de Tablas Blanc 2018',
          wineId: 7,
          region: 'USA',
          description: 'Great complexity and depth. Aged in a mixture of stainless steel and large format oak. A slight creamy/wax texture from the Rousanne.',
          imageUrl: 'https://images.vivino.com/thumbs/plLGJP0TR-SJVC_IC5aYJQ_pb_x600.png',
          price: 29.99
				},
        {
					name: 'Golan Heights Hermon Mount white 2020',
          wineId: 7,
          region: 'Israel',
          description: 'Fine nose: aromas of minerals, melon, peach and wax. On the palate an oily structure, dry, medium + acidity, at the finish a sweet aftertaste of apple.',
          imageUrl: 'https://images.vivino.com/thumbs/9AjV6j_XTA6u2y0LyS9Mbw_pb_x600.png',
          price: 12.99
				},
        // 8. Muscat Blanc
        {
					name: 'Colosi Passito 2015',
          wineId: 8,
          region: 'Italy',
          description: 'A gift for Sunday lunch. Brought back wonderful memories of eating and drinking our way through Sicily a couple of years ago. Extremely complex with raisins, nuts, honey. Viscous in the mouth. Unstoppable!',
          imageUrl: 'https://images.vivino.com/thumbs/GQEyM5OyQB2F55ouIo20zg_pb_x600.png',
          price: 26.99
				},
        {
					name: 'Domaine de Durban Muscat de Beaumes-de-Venise 2013',
          wineId: 8,
          region: 'France',
          description: 'Epic muscat a petit grains. Almond, apricot, candied peach, pandoro with icing sugar, sweet nut, candied pear. Right level of sweetness and acidity. Long finale.',
          imageUrl: 'https://images.vivino.com/thumbs/TGdart4zRQGI70hl9nnjTw_pb_x600.png',
          price: 28.84
				},
        // 9. Riesling
        {
					name: 'Schloss Johannisberg Rotlack Riesling Kabinett Feinherb 2018',
          wineId: 9,
          region: 'Germany',
          description: 'Summer-day on the terrace with shrimps. Deep straw yellow. Stone fruit, citrus and floral nose. Fresh, juicy, nice balance between the acidity and sweetnes. Citrus, green apple, white flowers and some peach notes. Great value!',
          imageUrl: 'https://images.vivino.com/thumbs/UAb-DZPLSrWHIzRoSOn-_g_pb_x600.png',
          price: 29.99
				},
        {
					name: 'Salomon Undhof Von den Terrassen Riesling 2020',
          wineId: 9,
          region: 'Austria',
          description: 'grapefruit citrus orange peel green apple minerals on the nose refreshing medium body high acidity but very balance not too dry green apple citrus minerals orange on the palate medium+ finish very nice Riesling',
          imageUrl: 'https://images.vivino.com/thumbs/mz8tvp13Rs-aHJjV_OlC4A_pb_x600.png',
          price: 20.99
				},
        // 10. Rose
        {
					name: 'Chateau d\'Esclans Whispering Angel Rose',
          wineId: 10,
          region: 'France',
          description: 'The only rosé you’ll be able to find on Harbor Island, The Bahamas. For good reason! Lots of fruity flavors like strawberry raspberry peach.',
          imageUrl: 'https://images.vivino.com/thumbs/Ki7znlmVT7iu_na3qUqRpw_pb_x600.png',
          price: 20.99
				},
        {
					name: 'Mateus The Original Rose N.V',
          wineId: 10,
          region: 'Portugal',
          description: 'A very fruity and refreshing wine. Great for the hot summer months. I usually enjoy it with a prawn cocktail. Goes very nice with a spaghetti carbonara also. Really enjoyable wine. My favourite rosé',
          imageUrl: 'https://images.vivino.com/thumbs/S1xMh-EDQiqQh4EiWlMwxw_pb_x600.png',
          price: 9.99
				},
        // 11. Pinot Noir
        {
					name: 'Belle Glos Clark & Telephone Vineyard Pinot Noir 2020',
          wineId: 11,
          region: 'USA',
          description: 'Nice and smooth Pinot with vanilla raspberries and cherry highlights. Finish lingers a bit and overall it is very well balanced. I’ll take another glass please!!',
          imageUrl: 'https://images.vivino.com/thumbs/90WvGviRRGyS_stN6b8sTw_pb_x600.png',
          price: 38.99
				},
        {
					name: 'Migration Sonoma Coast Pinot Noir 2020',
          wineId: 11,
          region: 'USA',
          description: 'This is a really young fresh wine that would benefit from aging. It is smooth and elegant. Very aromatic with bits of dark cherries. A classic young California Pinot Noir.',
          imageUrl: 'https://images.vivino.com/thumbs/EWecbvvmT8KbcikG8XfkdQ_pb_x600.png',
          price: 29.99
				},
        // 12. Carignan
        {
					name: 'Las Jaras Wines Sweet Berry Wine 2019',
          wineId: 12,
          region: 'USA',
          description: 'Super smooth. Dark berry fruity. No aftertaste. Feels like an Italian style wine. Definitely a bigger wine, would go well with pasta, heavy meats, fall/winter.',
          imageUrl: 'https://images.vivino.com/thumbs/SoNwE8HESwekzt-V44bhMw_pb_x600.png',
          price: 34.99
				},
        {
					name: 'Clos Lentiscus Perill Noir Carinyena 2015',
          wineId: 12,
          region: 'Spain',
          description: 'A bit sour upon first sip but opened up really nicely. A touch of natural effervescence and a lot of bright fruits. This was delicious.',
          imageUrl: 'https://images.vivino.com/thumbs/WD-lmI84RD6ROJbRSy66Wg_pb_x600.png',
          price: 34.99
				},
        // 13. Merlot
        {
					name: 'Emmolo Merlot 2019',
          wineId: 13,
          region: 'USA',
          description: 'Cherry red color. Big napa red but not a smoke bomb. Lots of cherry flavor and berries. Has some oak and vanilla and a caramel finish. Enjoyed at Good News.',
          imageUrl: 'https://images.vivino.com/thumbs/9npNBZOmS0y7lTUN7OYPCQ_pb_x600.png',
          price: 36.99
				},
        {
					name: 'La Croix Saint Christophe Saint-Emilion Grand Cru 2017',
          wineId: 13,
          region: 'France',
          description: 'We Went to Saint Émilion. We Selected Barrels WITH the 100-point Winemaker. The Result is Quite simply a Phenomenal Wine And a Fraction of the Price of Neighboring Estates',
          imageUrl: 'https://images.vivino.com/thumbs/xw_U6jvyTMy4_rLUqXGz0Q_pb_x600.png',
          price: 29.99
				},
        // 14. Zinfandel
        {
					name: 'Ridge Vineyards Lytton Springs 2019',
          wineId: 14,
          region: 'USA',
          description: 'Oak, american oak - coconut, smoke, leather. Full body, high alc. Forrest floor, jammy plum',
          imageUrl: 'https://images.vivino.com/thumbs/e4uP95afRTGvPoyYKdbVsQ_pb_x600.png',
          price: 39.99
				},
        {
					name: 'Frank Family Zinfandel 2018',
          wineId: 14,
          region: 'USA',
          description: 'Blackberry, black cherry, vanilla oak, bergamot, very rich/savory pork tenderloin marinating smell, fairly high acid, sweet side, medium tannins.. awesome wine',
          imageUrl: 'https://images.vivino.com/thumbs/ilOd7JJuQG2PkdyZQWQg3g_pb_x600.png',
          price: 34.99
				},
        // 15. Bordeaux Blend
        {
					name: 'Chateau Berreyres Haut-Medoc 2016',
          wineId: 15,
          region: 'France',
          description: 'Very nice surprise for this French wine - I was expecting usual pricy and not tasty one but I was nicely impressed by quality and flavors',
          imageUrl: 'https://images.vivino.com/thumbs/sMXqO2ZYRG-AjTDMNxKtSw_pb_x600.png',
          price: 35.99
				},
        {
					name: 'Chateau Larose-Trintaudon haut-Medoc 2016',
          wineId: 15,
          region: 'France',
          description: 'Black cherry and cassis on the nose and palate. Full body with grippy tannins. Well balanced, short and smooth finish. May improve with age.',
          imageUrl: 'https://images.vivino.com/thumbs/qgGXhX6eTI2u2qRVBJbdSw_pb_x600.png',
          price: 26.99
				},
        // 16. Cabernet Sauvignon
        {
					name: 'Bonanza Cabernet Sauvignon Lot N.V',
          wineId: 16,
          region: 'USA',
          description: 'Lots of fruit up front. Very jammy, blackberry with a bit of strawberry. Nice balance, very smooth. Medium finish with some oak and tobacco',
          imageUrl: 'https://images.vivino.com/thumbs/cVhc_50LTqOAE9KGlKJUCw_pb_x600.png',
          price: 17.99
				},
        {
					name: 'Halter Ranch Cabernet Sauvignon 2019',
          wineId: 16,
          region: 'USA',
          description: 'Oak blackberry notes matches perfectly with red meat or lamb',
          imageUrl: 'https://images.vivino.com/thumbs/aFM5wEHjTuibph-TIDLgKg_pb_x600.png',
          price: 39.99
				},
        // 17. Malbec
        {
					name: 'Salentein Primus Malbec 2016',
          wineId: 17,
          region: 'Argentina',
          description: 'From the Father of Modern Winemaking in Argentina Comes a Super-Premium, Upper-Elevation Malbec That’s Won Wild Praise from Fans and Critics Alike.',
          imageUrl: 'https://images.vivino.com/thumbs/LFxDWgJjTf6Ts4ff3PgiCw_pb_x600.png',
          price: 70.00
				},
        {
					name: 'Luca Old Vine Malbec 2019',
          wineId: 17,
          region: 'Argentina',
          description: 'Great tasting Malbec at a reasonable price point. Leather and spice on the nose with Blackberries, plum and tobacco on the palate. Low tannins and smooth finish.',
          imageUrl: 'https://images.vivino.com/thumbs/SewGPj3WQXmHJjyFI2JgoA_pb_x600.png',
          price: 39.99
				},
        // 18. Syrah
        {
					name: 'Cederberg Shiraz 2017',
          wineId: 18,
          region: 'South Africa',
          description: 'Excellent Shiraz, awarded with 5 stars by Platter. Deep garnet red, ripe black fruit, plum, mulberry, spices and herbs, fynbos. Nice balance with velvety tannins, full bodied with a long finish.',
          imageUrl: 'https://images.vivino.com/thumbs/kk-UqZPoR-eFdtDbRv6NcQ_pb_x600.png',
          price: 21.99
				},
        {
					name: 'Polkura Syrah 2017',
          wineId: 18,
          region: 'Chile',
          description: 'A really complex, brooding syrah. Notes of black fruit, peppercorn and a little anise, but also citrus peel on the finish. Really velvety and smooth with none of sickly finish you sometimes get with syrah/shiraz. I will be checking for this label again.',
          imageUrl: 'https://images.vivino.com/thumbs/pXpQB3IaSXSfYqmsq-s2sw_pb_x600.png',
          price: 20.99
				},
        // 19. Port
        {
					name: 'Cossart Gordon 5 Years Old Malmsey Full Rich N.V',
          wineId: 19,
          region: 'Portugal',
          description: 'Citrus and orange peel, some dried fruit ie. raisins and honey notes. nicely developed, well balanced acidity and body. Pleasant sweetness.',
          imageUrl: 'https://images.vivino.com/thumbs/YoZczU-qT4ipSgbLTQuj-A_pb_x600.png',
          price: 28.99
				},
        // 20. Sherry
        {
					name: 'Lustau East India Solera Sherry N.V',
          wineId: 20,
          region: 'Spain',
          description: 'medium bronze burnt sugar colour, concentrated prune scent with rich mouth coating with medium intensity walnut flavours complimented by nice sweetness.',
          imageUrl: 'https://images.vivino.com/thumbs/-C6Mf8xoTGK00XLP2FWfYg_pb_x600.png',
          price: 29.99
				},
        {
					name: 'Aecovi Alexandro Cream N.V',
          wineId: 20,
          region: 'Spain',
          description: 'Full-bodied bold and sweet. Nose: vanilla, honey and jam. Pallet: almond, hazelnut, honey, dried fruit. Some jam, honey and knits a little bit like a persimmon.',
          imageUrl: 'https://images.vivino.com/thumbs/Tq7Iq5G7SSqImVyOuG0tag_pb_x600.png',
          price: 19.99
				},

			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Bottles', null, {});
	},
};
