import React from 'react';
import './BoardItems.css';
import ItemCard from '../../Card/ItemCard';

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

function BoardItems ({itemType}) {
  return (
    <div className="board-items-tab-wrapper">
      {itemType.map(item => {
        return <ItemCard type={item}/>
      })}
    </div>
  )
}

export default BoardItems;
