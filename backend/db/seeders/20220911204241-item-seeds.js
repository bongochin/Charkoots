'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
			[
        // 1. Meats
				{
          name:'Prosciutto di San Daniele',
          categoryId: 1,
          type: '',
          imageUrl:'https://img.favpng.com/11/0/9/prosciutto-ham-italian-cuisine-antipasto-food-png-favpng-EXS1dw6r4ghT5fGLBQWnzFypm.jpg',
          description:'Not your average Prosciutto; Salty and oily, of course, but with that irresistable tangy, crudo flavors',
          price: 3.99
        },
        {
          name:'Mortadella',
          categoryId: 1,
          type: '',
          imageUrl:'https://img.favpng.com/17/19/7/york-ham-pizza-charcuterie-mortadella-png-favpng-7zh0sX5m25jC5eqEVqRzEDJuz.jpg',
          description:"A level up from your lunchbox Bologna, but I bet you look at old facebook albums in quarterly basis.",
          price: 3.99
        },
        {
          name:'Jamon Iberico',
          categoryId: 1,
          type: '',
          imageUrl:'https://pngimg.com/uploads/jamon/jamon_PNG41.png',
          description:"Deliciously marbled ham of very special Spanish black bigs. I heard they fly, or something.",
          price: 3.99
        },
        {
          name:'Soppressata',
          categoryId: 1,
          type: '',
          imageUrl:'https://w7.pngwing.com/pngs/319/97/png-transparent-salami-soppressata-bresaola-blood-sausage-mettwurst-meat-food-beef-animal-source-foods-thumbnail.png',
          description:"A type of Salami with a peppery, garlicy twist. Just enough heat to cut through the fat.",
          price: 3.99
        },
        {
          name:'Bresaola',
          categoryId: 1,
          type: '',
          imageUrl:'https://busseto.com/assets/images/products/bresaola/product-example.png',
          description:"A musky, leaner cut made from eye of top rounds. a Jab of funk, with a delicate after-taste",
          price: 3.99
        },
        {
          name:'Capocollo',
          categoryId: 1,
          type: '',
          imageUrl:'https://img2.pngio.com/capocollo-png-4-png-image-capocollo-png-800_800.png',
          description:'Also known as "Coppa"; A dry-cured, spice-rubbed pork neck with a generous marbeling and texture',
          price: 3.99
        },
        {
          name:'Spanish Chorizo',
          categoryId: 1,
          type: '',
          imageUrl:'https://img.pngio.com/halal-spanish-cuisine-chorizo-ham-salami-ham-chorizo-png-900_500.png',
          description:"The spiciest and smokiest player from our roster. A bit less greasy and sweeter than it's Mexican cousin",
          price: 3.99
        },
        {
          name:'Speck',
          categoryId: 1,
          type: '',
          imageUrl:'https://www.veroni.it/wp-content/uploads/2020/02/Fette-Speck2.jpg',
          description:"Cured meat equivalent of dry-humored marathon runner friend who insists on joining her on 5K charity run",
          price: 3.99
        },
        // 2. Cheeses
        {
          name:'Parmigiano Reggiano',
          categoryId: 2,
          type: '',
          imageUrl:'https://img.favpng.com/10/22/11/parmigiano-reggiano-gruy-re-cheese-grana-padano-montasio-pecorino-romano-png-favpng-c8stznyLxnZfbg8yVuWFjFRa2.jpg',
          description:'A fail-proof classic that we all love and enjoy; salty, nutty, waxy block of heaven',
          price: 3.99
        },
        {
          name:'Manchego',
          categoryId: 2,
          type: '',
          imageUrl:'https://w7.pngwing.com/pngs/971/470/png-transparent-gruyere-cheese-manchego-cheddar-cheese-raclette-goat-goat-food-animals-cheese.png',
          description:'A tangy sour cream flavor with cheesecake sweetness that has aged just enough to have caramel notes',
          price: 3.99
        },
        {
          name:'Robiola',
          categoryId: 2,
          type: '',
          imageUrl:'https://nonsolobuono.it/wp-content/uploads/2018/09/robiola.png',
          description:"Perfect blend of cow's, goat's and sheep milk. Smells like Funkytown but surprisingly mild and sweet",
          price: 3.99
        },
        {
          name:'Gouda',
          categoryId: 2,
          type: '',
          imageUrl:'https://p7.hiclipart.com/preview/264/1022/498/gruyxe8re-cheese-gouda-cheese-emmental-cheese-swiss-cheese-fresh-cheese.jpg',
          description:"Teacher's pet of cheeses; It's sharp but creamy, salty but sweet",
          price: 3.99
        },
        {
          name:'Vermont Cheddar',
          categoryId: 2,
          type: '',
          imageUrl:'https://www.kindpng.com/picc/m/196-1962393_designs-slice-of-cheddar-cheese-photo-cheese-hd.png',
          description:"There's a reason why people think of their cheese before Joe Biden when we talk about Vermont",
          price: 3.99
        },
        {
          name:'Blueberry Goat Cheese',
          categoryId: 2,
          type: '',
          imageUrl:'https://www.supermarketperimeter.com/ext/resources/0520-Montchevre1.png?1589985503',
          description:'Creamy and flavorful with an impressive outfit that just looks makes sense',
          price: 3.99
        },
        {
          name:'Triple Cream Brie',
          categoryId: 2,
          type: '',
          imageUrl:'http://atlas-content-cdn.pixelsquid.com/stock-images/brie-mdaZznC-600.jpg',
          description:'A quintessential crowd-pleaser; soft, buttery, luxurious, melt-in-your-mouth deliciousness',
          price: 3.99
        },
        {
          name:'Gorgonzola Dolce',
          categoryId: 2,
          type: '',
          imageUrl:'https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/8901/image/cheese4c.gallery.png?t=1437610412',
          description:"Don't be intimidated by it's funky looks. A delicatly mild, sweet and creamy cheese that pairs perfectly with honey",
          price: 3.99
        },
        // 3. Crackers
        {
          name:'Toasted Baguettes',
          categoryId: 3,
          type: '',
          imageUrl:'https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
          description:"It's a Paul Rudd of breads; everybody loves it, and gets along with pretty much everything",
          price: 3.99
        },
        {
          name:'Multi-Seed',
          categoryId: 3,
          type: '',
          imageUrl:'http://www.biobites.com/wp-content/uploads/2016/08/italian-crackers.png',
          description:"Extra nutty, crunchy, and flavorful base to harmonize your ingredients. Be sure to check your teeth constantly",
          price: 3.99
        },
        {
          name:'Whole Wheat',
          categoryId: 3,
          type: '',
          imageUrl:'https://previews.123rf.com/images/carla720/carla7201612/carla720161200134/67979599-some-whole-wheat-crackers-on-white-background.jpg',
          description:"Rich and sweet way to balance out the savory meats and cheeses",
          price: 3.99
        },
        {
          name:'Sourdough Flatbreads',
          categoryId: 3,
          type: '',
          imageUrl:'https://www.nairns-oatcakes.com/sites/default/files/styles/max_1300x1300/public/2019-09/canadian-products-packaging-flatbread-rosemary-sea-salt-1010px-wide.png?itok:Sdr3M5Zf',
          description:"With delightful hints of rosemary and sea salt to brighten the flavor and add complexity in every bite",
          price: 3.99
        },
        {
          name:'Croccantini',
          categoryId: 3,
          type: '',
          imageUrl:'https://lovewithfood.com/images/marketitemphotos/0000/4909/9ed22573d7_largest.jpg',
          description:"A de facto cracker built to handle the toughest loads of meats and cheeses",
          price: 3.99
        },
        {
          name:'Gluten-Free',
          categoryId: 3,
          type: '',
          imageUrl:'https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
          description:"Because we remember and care about you, unlike your boyfriend",
          price: 3.99
        },
        {
          name:'Rosemary Raisin Pecan Crisps',
          categoryId: 3,
          type: '',
          imageUrl:'https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
          description:"This one's got some flavor on it's own; best enjoyed with milder and softer cheeses",
          price: 3.99
        },
        {
          name:'Ritz',
          categoryId: 3,
          type: '',
          imageUrl:'https://www.pngkey.com/png/detail/371-3719312_ritz-crackers.png',
          description:"This is a judgement-free zone, but we're going to secretly assume that you peaked at high school",
          price: 3.99
        },
        // 4. Fruits
        {
          name:'Mission Figs',
          categoryId: 4,
          type: '',
          imageUrl:'https://www.clipartkey.com/mpngs/m/243-2437958_fig-png-image-background-turkey-figs.png',
          description:"If you know of the myth, we suggest not to mention it to your party... Until everyone had one, at least",
          price: 3.99
        },
        {
          name:'Champagne Grapes',
          categoryId: 4,
          type: '',
          imageUrl:'https://i.pinimg.com/originals/7a/38/e7/7a38e7207389f22a6a27f4e095807792.png',
          description:"Perfect for any occassions and celebrations, big and small",
          price: 3.99
        },
        {
          name:'Wild Berries',
          categoryId: 4,
          type: '',
          imageUrl:'https://freepngimg.com/thumb/berries/28851-1-berries-thumb.png',
          description:"If we're honest, there's nothing wild about them. They're just berries",
          price: 3.99
        },
        {
          name:'Luxardo Maraschino Cherries',
          categoryId: 4,
          type: '',
          imageUrl:'https://applejack.com/site/images/Luxardo-Maraschino-Cherries_1.png',
          description:"Grab a few of these before plating and fix yourself a mean old fashioned",
          price: 3.99
        },
        {
          name:'Dried Apricots',
          categoryId: 4,
          type: '',
          imageUrl:'https://www.nutfruit.org/images/consumer-fruit/1570535024-apricot.png',
          description:"a delightful flavor full of tropical sunshine",
          price: 3.99
        },
        {
          name:'Mixed Olives',
          categoryId: 4,
          type: '',
          imageUrl:'https://cdn.shopify.com/s/files/1/1529/5227/products/TCS_Provision-spanishOlives_1024x684_aebe5cf8-d5bd-410f-8562-defba611cc7e_1024x1024.png?v:1542757765',
          description:"A grocer’s choice. It's pitted, so no one has to call the dentist (because they are not real doctors)",
          price: 3.99
        },
        {
          name:'Cornichons',
          categoryId: 4,
          type: '',
          imageUrl:'https://www.fondation-louisbonduelle.org/wp-content/uploads/2016/09/legume-transparant-cornichon.png',
          description:'Stop calling it "those tiny pickled cucumber thingies". we\'re going to quiz you on this',
          price: 3.99
        },
        {
          name:'Artichoke Hearts',
          categoryId: 4,
          type: '',
          imageUrl:'https://lotsa.com/wp-content/uploads/2018/02/artichoke-hearts-300x297.png',
          description:"A light, punchy palate cleanser strong enough to cut through the fat from meat and cheese",
          price: 3.99
        },
        // 5. Nuts
        {
          name:'Marcona Almonds',
          categoryId: 5,
          type: '',
          imageUrl:'https://woodlandfoods.com/img/WF_Images/N44-nuts-marcona-almonds-main.jpg',
          description:"Trust us, this is the almond you want; nuttier, perfectly seasoned crunch without dry almond aftertaste",
          price: 3.99
        },
        {
          name:'Praline Pecans',
          categoryId: 5,
          type: '',
          imageUrl:'http://cdn.shopify.com/s/files/1/2507/9278/products/WataNut-PralinePecans-bowl_600x.png?v:1510236928',
          description:"People may (by may we mean always) argue about the pronunciation, but we can all agree that this is delicious",
          price: 3.99
        },
        {
          name:'Pistachios',
          categoryId: 5,
          type: '',
          imageUrl:'https://freepngimg.com/thumb/pistachio/7-2-pistachio-png-hd.png',
          description:"Pro tip: wedge in a loose shell between the cracks and use it as a crowbar. Let the Physics do the work",
          price: 3.99
        },
        {
          name:'Hazelnuts',
          categoryId: 5,
          type: '',
          imageUrl:'https://e1.pngegg.com/pngimages/476/408/png-clipart-autumn-hazelnut.png',
          description:"An irresistably toasty goodness with an intoxicating fragrance",
          price: 3.99
        },
        {
          name:'Macadamia Nuts',
          categoryId: 5,
          type: '',
          imageUrl:'https://img.favpng.com/25/4/10/macadamia-oil-macadamia-nut-tree-nut-allergy-png-favpng-NtD4Qsn3au4gZX7uZg5A2E0wk.jpg',
          description:"Imported exclusively from Hawaiian airport's duty-free outlet where your newlywed friend bought all of her souvinir gifts for her friends",
          price: 3.99
        },
        {
          name:'Cashews',
          categoryId: 5,
          type: '',
          imageUrl:'http://pngimg.com/uploads/cashew/cashew_PNG51.png',
          description:"For those who were forced to eat leftovers from a mixed-nut can, who ended up liking it",
          price: 3.99
        },
        {
          name:'Chocolate Peanuts',
          categoryId: 5,
          type: '',
          imageUrl:'https://w7.pngwing.com/pngs/57/57/png-transparent-chocolate-coated-peanut-white-chocolate-salty-liquorice-macaroon-chocolate-food-peanut-superfood.png',
          description:"Please don't order this if you have a peanut allergy, pretty please",
          price: 3.99
        },
        {
          name:'Yogurt Almonds',
          categoryId: 5,
          type: '',
          imageUrl:'https://www.nutstop.com/wp-content/uploads/2015/06/Yogurt-Almonds-Nutstop.jpg',
          description:"There's a reason why trail mix has these guys in it...",
          price: 3.99
        },
        // 6. Spreads
        {
          name:'Spicy Honey',
          categoryId: 6,
          type: '',
          imageUrl:'http://pngimg.com/uploads/honey/honey_PNG86308.png',
          description:"A rich, glossy and sweet glue with a an interesting, lively kick",
          price: 3.99
        },
        {
          name:'Truffle Olive Oil',
          categoryId: 6,
          type: '',
          imageUrl:'https://www.laquintaoliveoilcompany.com/wp-content/uploads/2018/03/WhitetruffleOO.png',
          description:"It's amazing how a few drops of these on everything elevates the flavor to the next level",
          price: 3.99
        },
        {
          name:'Orange Marmalade',
          categoryId: 6,
          type: '',
          imageUrl:'https://img.favpng.com/18/21/13/jam-bonne-maman-canning-strawberry-marmalade-png-favpng-7YLkW39FtkdkTsPWGPzj4ge1u.jpg',
          description:"A bit breakfasty, but trust its bright, bitter and sweet awesomeness",
          price: 3.99
        },
        {
          name:'Fig Jam',
          categoryId: 6,
          type: '',
          imageUrl: '',
          description:"A charchuterie classic, nice blend of savory and sweet",
          price: 3.99
        },
        {
          name:'Sun-dried Tomato Puree',
          categoryId: 6,
          type: '',
          imageUrl:'https://cdn.imgbin.com/1/8/9/imgbin-sun-dried-tomato-pasta-p-t-tomato-paste-tomato-6H4U2UBepAcTjUZmGVNpFGhgi.jpg',
          description:"A touch of this on any greasy meats and/or cheeses will transform your ensemble into very Italian hors d'oeuvres",
          price: 3.99
        },
        {
          name:'Dijon Mustard',
          categoryId: 6,
          type: '',
          imageUrl:'https://w7.pngwing.com/pngs/962/990/png-transparent-french-cuisine-maille-dijon-mustard-dijon-mustard-mustard-oil-seasoning-vinegar-mustard-oil.png',
          description:"Mustard spiciness is the perfect way to bring orders back to your board, without overpowering richness",
          price: 3.99
        },
        {
          name:'Caramelized Onion Jam',
          categoryId: 6,
          type: '',
          imageUrl:'https://cdn.shopify.com/s/files/1/0299/8150/7716/products/0owJjXT0RxCXizu7qzCt_Untitled_design_-_2020-05-27T150633.839_2048x.png?v=1591287538',
          description:"A quintessential sweet and savory jam with rich vegetable tastes",
          price: 3.99
        },
        {
          name:'Guacamole',
          categoryId: 6,
          type: '',
          imageUrl:'https://banner2.cleanpng.com/20190618/ajp/kisspng-guacamole-salsa-mexican-cuisine-chipotle-mexican-g-chipotle-avocado-5d08679cb62091.449091281560831900746.jpg',
          description:"Least traditional, but it's all about emulsion. Perfect choice to explore new flavor horizon",
          price: 3.99
        }
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Items', null, {});
	},
};
