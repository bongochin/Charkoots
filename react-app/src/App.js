import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';

import NavBar from './components/NavBar';
import UsersList from './components/UserList';
import User from './components/User';
import Home from './components/Home';

import Orders from './components/Orders';
import Menus from './components/Menus';
import ItemCard from './components/Card/ItemCard'

import { authenticate } from './services/auth';
import Footer from './components/Footer';
import OrderForm from './components/Orders/OrderForm';

const meats = [
	{
		item_name:'Prosciutto di San Daniele',
		item_image:'https://img.favpng.com/11/0/9/prosciutto-ham-italian-cuisine-antipasto-food-png-favpng-EXS1dw6r4ghT5fGLBQWnzFypm.jpg',
		item_description:'Not your average Prosciutto; Salty and oily, of course, but with that irresistable tangy, crudo flavors',
		boldness:4.4,
		sharpness:2.4,
		saltiness:4.2,
		spiciness:0.9,
		sweetness:1.7,
	},
	{
		item_name:'Mortadella',
		item_image:'https://img.favpng.com/17/19/7/york-ham-pizza-charcuterie-mortadella-png-favpng-7zh0sX5m25jC5eqEVqRzEDJuz.jpg',
		item_description:"A level up from your lunchbox Bologna, but I bet you look at old facebook albums in quarterly basis.",
		boldness:4.1,
		sharpness:2.1,
		saltiness:3.8,
		spiciness:0.4,
		sweetness:2.0,
	},
	{
		item_name:'Jamon Iberico',
		item_image:'https://pngimg.com/uploads/jamon/jamon_PNG41.png',
		item_description:"Deliciously marbled ham of very special Spanish black bigs. I heard they fly, or something.",
		boldness:4.4,
		sharpness:2.7,
		saltiness:3.8,
		spiciness:1.2,
		sweetness:1.3,
	},
	{
		item_name:'Soppressata',
		item_image:'https://w7.pngwing.com/pngs/319/97/png-transparent-salami-soppressata-bresaola-blood-sausage-mettwurst-meat-food-beef-animal-source-foods-thumbnail.png',
		item_description:"A type of Salami with a peppery, garlicy twist. Just enough heat to cut through the fat.",
		boldness:4.2,
		sharpness:3.7,
		saltiness:3.5,
		spiciness:2.8,
		sweetness:2.7,
	},
	{
		item_name:'Bresaola',
		item_image:'https://busseto.com/assets/images/products/bresaola/product-example.png',
		item_description:"A musky, leaner cut made from eye of top rounds. a Jab of funk, with a delicate after-taste",
		boldness:2.6,
		sharpness:3.6,
		saltiness:2.9,
		spiciness:0.8,
		sweetness:1.6,
	},
	{
		item_name:'Capocollo',
		item_image:'https://img2.pngio.com/capocollo-png-4-png-image-capocollo-png-800_800.png',
		item_description:'Also known as "Coppa"; A dry-cured, spice-rubbed pork neck with a generous marbeling and texture',
		boldness:4.6,
		sharpness:3.1,
		saltiness:3.3,
		spiciness:3.2,
		sweetness:1.4,
	},
	{
		item_name:'Spanish Chorizo',
		item_image:'https://img.pngio.com/halal-spanish-cuisine-chorizo-ham-salami-ham-chorizo-png-900_500.png',
		item_description:"The spiciest and smokiest player from our roster. A bit less greasy and sweeter than it's Mexican cousin",
		boldness:4.1,
		sharpness:2.7,
		saltiness:3.8,
		spiciness:4.5,
		sweetness:3.1,
	},
	{
		item_name:'Speck',
		item_image:'https://www.veroni.it/wp-content/uploads/2020/02/Fette-Speck2.jpg',
		item_description:"Cured meat equivalent of dry-humored marathon runner friend who insists on joining her on 5K charity run",
		boldness:2.7,
		sharpness:2.9,
		saltiness:3.1,
		spiciness:0.7,
		sweetness:1.5,
	}
]
const cheeses = [
	{
		item_name:'Parmigiano Reggiano',
		item_image:'https://img.favpng.com/10/22/11/parmigiano-reggiano-gruy-re-cheese-grana-padano-montasio-pecorino-romano-png-favpng-c8stznyLxnZfbg8yVuWFjFRa2.jpg',
		item_description:'A fail-proof classic that we all love and enjoy; salty, nutty, waxy block of heaven',
		boldness:2.4,
		sharpness:3.1,
		saltiness:4.1,
		spiciness:0.9,
		sweetness:2.6,
	},
	{
		item_name:'Manchego',
		item_image:'https://w7.pngwing.com/pngs/971/470/png-transparent-gruyere-cheese-manchego-cheddar-cheese-raclette-goat-goat-food-animals-cheese.png',
		item_description:'A tangy sour cream flavor with cheesecake sweetness that has aged just enough to have caramel notes',
		boldness:2.3,
		sharpness:4.1,
		saltiness:2.8,
		spiciness:0.9,
		sweetness:3.1,
	},
	{
		item_name:'Robiola',
		item_image:'https://nonsolobuono.it/wp-content/uploads/2018/09/robiola.png',
		item_description:"Perfect blend of cow's, goat's and sheep milk. Smells like Funkytown but surprisingly mild and sweet",
		boldness:3.7,
		sharpness:3.1,
		saltiness:3.6,
		spiciness:0.3,
		sweetness:3.4,
	},
	{
		item_name:'Gouda',
		item_image:'https://p7.hiclipart.com/preview/264/1022/498/gruyxe8re-cheese-gouda-cheese-emmental-cheese-swiss-cheese-fresh-cheese.jpg',
		item_description:"Teacher's pet of cheeses; It's sharp but creamy, salty but sweet",
		boldness:3.7,
		sharpness:3.7,
		saltiness:3.4,
		spiciness:0.3,
		sweetness:3.4,
	},
	{
		item_name:'Vermont Cheddar',
		item_image:'https://www.kindpng.com/picc/m/196-1962393_designs-slice-of-cheddar-cheese-photo-cheese-hd.png',
		item_description:"There's a reason why people think of their cheese before Joe Biden when we talk about Vermont",
		boldness:3.9,
		sharpness:2.8,
		saltiness:4.1,
		spiciness:0.2,
		sweetness:2.7,
	},
	{
		item_name:'Blueberry Goat Cheese',
		item_image:'https://www.supermarketperimeter.com/ext/resources/0520-Montchevre1.png?1589985503',
		item_description:'Creamy and flavorful with an impressive outfit that just looks makes sense',
		boldness:2.9,
		sharpness:4.1,
		saltiness:2.8,
		spiciness:0.3,
		sweetness:4.1,
	},
	{
		item_name:'Triple Cream Brie',
		item_image:'http://atlas-content-cdn.pixelsquid.com/stock-images/brie-mdaZznC-600.jpg',
		item_description:'A quintessential crowd-pleaser; soft, buttery, luxurious, melt-in-your-mouth deliciousness',
		boldness:4.5,
		sharpness:2.4,
		saltiness:3.9,
		spiciness:0.2,
		sweetness:3.3,
	},
	{
		item_name:'Gorgonzola Dolce',
		item_image:'https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/8901/image/cheese4c.gallery.png?t=1437610412',
		item_description:"Don't be intimidated by it's funky looks. A delicatly mild, sweet and creamy cheese that pairs perfectly with honey",
		boldness:3.6,
		sharpness:3.4,
		saltiness:3.0,
		spiciness:0.6,
		sweetness:3.3,
	}
]
const crackers = [
	{
		item_name:'Toasted Baguettes',
		item_image:'https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
		item_description:"It's a Paul Rudd of breads; everybody loves it, and gets along with pretty much everything",
		boldness:0.4,
		sharpness:0.4,
		saltiness:1.9,
		spiciness:0.1,
		sweetness:1.2,
	},
	{
		item_name:'Multi-Seed',
		item_image:'http://www.biobites.com/wp-content/uploads/2016/08/italian-crackers.png',
		item_description:"Extra nutty, crunchy, and flavorful base to harmonize your ingredients. Be sure to check your teeth constantly",
		boldness:1.5,
		sharpness:0.4,
		saltiness:0.9,
		spiciness:0.1,
		sweetness:1.9,
	},
	{
		item_name:'Whole Wheat',
		item_image:'https://previews.123rf.com/images/carla720/carla7201612/carla720161200134/67979599-some-whole-wheat-crackers-on-white-background.jpg',
		item_description:"Rich and sweet way to balance out the savory meats and cheeses",
		boldness:1.2,
		sharpness:0.4,
		saltiness:1.1,
		spiciness:0.1,
		sweetness:2.2,
	},
	{
		item_name:'Sourdough Flatbreads',
		item_image:'https://www.nairns-oatcakes.com/sites/default/files/styles/max_1300x1300/public/2019-09/canadian-products-packaging-flatbread-rosemary-sea-salt-1010px-wide.png?itok:Sdr3M5Zf',
		item_description:"With delightful hints of rosemary and sea salt to brighten the flavor and add complexity in every bite",
		boldness:1.4,
		sharpness:1.2,
		saltiness:2.1,
		spiciness:0.5,
		sweetness:0.8,
	},
	{
		item_name:'Croccantini',
		item_image:'https://lovewithfood.com/images/marketitemphotos/0000/4909/9ed22573d7_largest.jpg',
		item_description:"A de facto cracker built to handle the toughest loads of meats and cheeses",
		boldness:0.4,
		sharpness:0.4,
		saltiness:0.9,
		spiciness:0.1,
		sweetness:0.2,
	},
	{
		item_name:'Gluten-Free',
		item_image:'https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
		item_description:"Because we remember and care about you, unlike your boyfriend",
		boldness:0.4,
		sharpness:0.4,
		saltiness:1.9,
		spiciness:0.1,
		sweetness:1.2,
	},
	{
		item_name:'Rosemary Raisin Pecan Crisps',
		item_image:'https://png.pngtree.com/png-vector/20201110/ourlarge/pngtree-slice-of-healthy-baguette-png-image_2402376.jpg',
		item_description:"This one's got some flavor on it's own; best enjoyed with milder and softer cheeses",
		boldness:2.1,
		sharpness:1.2,
		saltiness:1.9,
		spiciness:1.1,
		sweetness:2.6,
	},
	{
		item_name:'Ritz',
		item_image:'https://www.pngkey.com/png/detail/371-3719312_ritz-crackers.png',
		item_description:"This is a judgement-free zone, but we're going to secretly assume that you peaked at high school",
		boldness:3.1,
		sharpness:1.7,
		saltiness:3.2,
		spiciness:0.1,
		sweetness:1.4,
	},
]
const fruits = [
	{
		item_name:'Mission Figs',
		item_image:'https://www.clipartkey.com/mpngs/m/243-2437958_fig-png-image-background-turkey-figs.png',
		item_description:"If you know of the myth, we suggest not to mention it to your party... Until everyone had one, at least",
		boldness:2.8,
		sharpness:1.2,
		saltiness:0.1,
		spiciness:0.1,
		sweetness:3.2,
	},
	{
		item_name:'Champagne Grapes',
		item_image:'https://i.pinimg.com/originals/7a/38/e7/7a38e7207389f22a6a27f4e095807792.png',
		item_description:"Perfect for any occassions and celebrations, big and small",
		boldness:0.3,
		sharpness:4.1,
		saltiness:0.1,
		spiciness:0.1,
		sweetness:3.6,
	},
	{
		item_name:'Wild Berries',
		item_image:'https://freepngimg.com/thumb/berries/28851-1-berries-thumb.png',
		item_description:"If we're honest, there's nothing wild about them. They're just berries",
		boldness:0.9,
		sharpness:4.1,
		saltiness:0.1,
		spiciness:0.1,
		sweetness:2.7,
	},
	{
		item_name:'Luxardo Maraschino Cherries',
		item_image:'https://applejack.com/site/images/Luxardo-Maraschino-Cherries_1.png',
		item_description:"Grab a few of these before plating and fix yourself a mean old fashioned",
		boldness:2.3,
		sharpness:2.2,
		saltiness:0.1,
		spiciness:0.1,
		sweetness:3.8,
	},
	{
		item_name:'Dried Apricots',
		item_image:'https://www.nutfruit.org/images/consumer-fruit/1570535024-apricot.png',
		item_description:"a delightful flavor full of tropical sunshine",
		boldness:3.1,
		sharpness:1.2,
		saltiness:0.6,
		spiciness:0.1,
		sweetness:3.7,
	},
	{
		item_name:'Mixed Olives',
		item_image:'https://cdn.shopify.com/s/files/1/1529/5227/products/TCS_Provision-spanishOlives_1024x684_aebe5cf8-d5bd-410f-8562-defba611cc7e_1024x1024.png?v:1542757765',
		item_description:"A grocer’s choice. It's pitted, so no one has to call the dentist (because they are not real doctors)",
		boldness:3.4,
		sharpness:1.7,
		saltiness:2.4,
		spiciness:0.3,
		sweetness:1.6,
	},
	{
		item_name:'Cornichons',
		item_image:'https://www.fondation-louisbonduelle.org/wp-content/uploads/2016/09/legume-transparant-cornichon.png',
		item_description:'Stop calling it "those tiny pickled cucumber thingies". we\'re going to quiz you on this',
		boldness:0.2,
		sharpness:4.1,
		saltiness:3.2,
		spiciness:0.8,
		sweetness:3.6,
	},
	{
		item_name:'Artichoke Hearts',
		item_image:'https://lotsa.com/wp-content/uploads/2018/02/artichoke-hearts-300x297.png',
		item_description:"A light, punchy palate cleanser strong enough to cut through the fat from meat and cheese",
		boldness:1.6,
		sharpness:3.5,
		saltiness:1.3,
		spiciness:0.6,
		sweetness:1.7,
	}
]
const nuts = [
	{
		item_name:'Marcona Almonds',
		item_image:'https://woodlandfoods.com/img/WF_Images/N44-nuts-marcona-almonds-main.jpg',
		item_description:"Trust us, this is the almond you want; nuttier, perfectly seasoned crunch without dry almond aftertaste",
		boldness:4.1,
		sharpness:0.9,
		saltiness:3.6,
		spiciness:0.1,
		sweetness:2.8,
	},
	{
		item_name:'Praline Pecans',
		item_image:'http://cdn.shopify.com/s/files/1/2507/9278/products/WataNut-PralinePecans-bowl_600x.png?v:1510236928',
		item_description:"People may (by may we mean always) argue about the pronunciation, but we can all agree that this is delicious",
		boldness:4.1,
		sharpness:0.9,
		saltiness:1.3,
		spiciness:0.1,
		sweetness:4.0,
	},
	{
		item_name:'Pistachios',
		item_image:'https://freepngimg.com/thumb/pistachio/7-2-pistachio-png-hd.png',
		item_description:"Pro tip: wedge in a loose shell between the cracks and use it as a crowbar. Let the Physics do the work",
		boldness:3.7,
		sharpness:1.2,
		saltiness:3.9,
		spiciness:0.1,
		sweetness:1.7,
	},
	{
		item_name:'Hazelnuts',
		item_image:'https://e1.pngegg.com/pngimages/476/408/png-clipart-autumn-hazelnut.png',
		item_description:"An irresistably toasty goodness with an intoxicating fragrance",
		boldness:4.6,
		sharpness:0.2,
		saltiness:0.4,
		spiciness:0.1,
		sweetness:1.6,
	},
	{
		item_name:'Macadamia Nuts',
		item_image:'https://img.favpng.com/25/4/10/macadamia-oil-macadamia-nut-tree-nut-allergy-png-favpng-NtD4Qsn3au4gZX7uZg5A2E0wk.jpg',
		item_description:"Imported exclusively from Hawaiian airport's duty-free outlet where your newlywed friend bought all of her souvinir gifts for her friends",
		boldness:4.2,
		sharpness:0.9,
		saltiness:1.4,
		spiciness:0.1,
		sweetness:3.6,
	},
	{
		item_name:'Cashews',
		item_image:'http://pngimg.com/uploads/cashew/cashew_PNG51.png',
		item_description:"For those who were forced to eat leftovers from a mixed-nut can, who ended up liking it",
		boldness:3.9,
		sharpness:0.9,
		saltiness:3.7,
		spiciness:0.1,
		sweetness:0.8,
	},
	{
		item_name:'Chocolate Peanuts',
		item_image:'https://w7.pngwing.com/pngs/57/57/png-transparent-chocolate-coated-peanut-white-chocolate-salty-liquorice-macaroon-chocolate-food-peanut-superfood.png',
		item_description:"Please don't order this if you have a peanut allergy, pretty please",
		boldness:3.7,
		sharpness:0.9,
		saltiness:1.6,
		spiciness:0.1,
		sweetness:3.7,
	},
	{
		item_name:'Yogurt Almonds',
		item_image:'https://www.nutstop.com/wp-content/uploads/2015/06/Yogurt-Almonds-Nutstop.jpg',
		item_description:"There's a reason why trail mix has these guys in it...",
		boldness:3.6,
		sharpness:1.2,
		saltiness:1.6,
		spiciness:0.1,
		sweetness:3.8,
	}
]
const spreads = [
	{
		item_name:'Spicy Honey',
		item_image:'http://pngimg.com/uploads/honey/honey_PNG86308.png',
		item_description:"A rich, glossy and sweet glue with a an interesting, lively kick",
		boldness:3.7,
		sharpness:1.1,
		saltiness:0.1,
		spiciness:3.4,
		sweetness:4.2,
	},
	{
		item_name:'Truffle Olive Oil',
		item_image:'https://www.laquintaoliveoilcompany.com/wp-content/uploads/2018/03/WhitetruffleOO.png',
		item_description:"It's amazing how a few drops of these on everything elevates the flavor to the next level",
		boldness:4.8,
		sharpness:0.6,
		saltiness:0.4,
		spiciness:0.4,
		sweetness:1.6,
	},
	{
		item_name:'Orange Marmalade',
		item_image:'https://img.favpng.com/18/21/13/jam-bonne-maman-canning-strawberry-marmalade-png-favpng-7YLkW39FtkdkTsPWGPzj4ge1u.jpg',
		item_description:"A bit breakfasty, but trust its bright, bitter and sweet awesomeness",
		boldness:2.8,
		sharpness:3.1,
		saltiness:1.1,
		spiciness:0.9,
		sweetness:4.2,
	},
	{
		item_name:'Fig Jam',
		item_image:'data:image/jpeg;base64,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',
		item_description:"A charchuterie classic, nice blend of savory and sweet",
		boldness:3.2,
		sharpness:1.7,
		saltiness:3.6,
		spiciness:0.4,
		sweetness:3.9,
	},
	{
		item_name:'Sun-dried Tomato Puree',
		item_image:'https://cdn.imgbin.com/1/8/9/imgbin-sun-dried-tomato-pasta-p-t-tomato-paste-tomato-6H4U2UBepAcTjUZmGVNpFGhgi.jpg',
		item_description:"A touch of this on any greasy meats and/or cheeses will transform your ensemble into very Italian hors d'oeuvres",
		boldness:3.2,
		sharpness:3.1,
		saltiness:3.2,
		spiciness:2.7,
		sweetness:2.2,
	},
	{
		item_name:'Dijon Mustard',
		item_image:'https://w7.pngwing.com/pngs/962/990/png-transparent-french-cuisine-maille-dijon-mustard-dijon-mustard-mustard-oil-seasoning-vinegar-mustard-oil.png',
		item_description:"Mustard spiciness is the perfect way to bring orders back to your board, without overpowering richness",
		boldness:2.7,
		sharpness:4.1,
		saltiness:1.8,
		spiciness:4.4,
		sweetness:3.2,
	},
	{
		item_name:'Caramelized Onion Jam',
		item_image:'https://cdn.shopify.com/s/files/1/0299/8150/7716/products/0owJjXT0RxCXizu7qzCt_Untitled_design_-_2020-05-27T150633.839_2048x.png?v=1591287538',
		item_description:"A quintessential sweet and savory jam with rich vegetable tastes",
		boldness:3.7,
		sharpness:2.7,
		saltiness:3.8,
		spiciness:1.9,
		sweetness:3.8,
	},
	{
		item_name:'Guacamole',
		item_image:'https://banner2.cleanpng.com/20190618/ajp/kisspng-guacamole-salsa-mexican-cuisine-chipotle-mexican-g-chipotle-avocado-5d08679cb62091.449091281560831900746.jpg',
		item_description:"Least traditional, but it's all about emulsion. Perfect choice to explore new flavor horizon",
		boldness:4.1,
		sharpness:3.1,
		saltiness:3.1,
		spiciness:3.7,
		sweetness:2.1,
	}
]
function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar setAuthenticated={setAuthenticated} />
			<Switch>
				<Route path="/" exact={true}>
					<Home />
				</Route>
				<Route path="/orders" exact={true}>
					<Orders />
				</Route>
				<Route path="/orders/new" exact={true}>
					<OrderForm authenticated={authenticated} setAuthenticated={setAuthenticated}/>
				</Route>
				<Route path="/menus" exact={true}>
					<Menus />
				</Route>
				<Route path="/menus/meats" exact={true}>
					{meats.map(meat => {
            return <ItemCard type={meat}/>
          })}
				</Route>
				<Route path="/menus/cheeses" exact={true}>
					{cheeses.map(cheese => {
            return <ItemCard type={cheese}/>
          })}
				</Route>
				<Route path="/menus/crackers" exact={true}>
					{crackers.map(cracker => {
            return <ItemCard type={cracker}/>
          })}
				</Route>
				<Route path="/menus/fruits" exact={true}>
					{fruits.map(fruit => {
            return <ItemCard type={fruit}/>
          })}
				</Route>
				<Route path="/menus/nuts" exact={true}>
					{nuts.map(nut => {
            return <ItemCard type={nut}/>
          })}
				</Route>
				<Route path="/menus/spreads" exact={true}>
					{spreads.map(spread => {
            return <ItemCard type={spread}/>
          })}
				</Route>
				<Route path="/login" exact={true}>
					<LoginForm
						authenticated={authenticated} setAuthenticated={setAuthenticated}
					/>
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<ProtectedRoute
					path="/users"
					exact={true}
					authenticated={authenticated}
				>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute
					path="/users/:userId"
					exact={true}
					authenticated={authenticated}
				>
					<User />
				</ProtectedRoute>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
