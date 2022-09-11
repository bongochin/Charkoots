import React, { useContext, useState } from 'react';
import MenuNavBar from './MenuNavBar';
import { tabToDisplay } from './MenuNavBar';
import Curated from './MenusTab/Curated'
import BoardItems from './MenusTab/BoardItems'
import BoardCard from '../Card/BoardCard'
import MenuCard from '../Card/MenuCard'
import './Menus.css';
import {MenuNavBarContext} from '../../context/MenuNavBarContext'

const curated = [
	{
		name: 'Rat Pack',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/WebsiteM_C8.262_1080x1080.jpg?v=1602388225',
		description: "It's what this generation calls it a GOAT. Best consumed with your grandapa to discuss how 'grand' things were back then",
		ingredients: "Prosciutto di San Daniele, Jamon Iberico, Capocollo, Triple Creme Brie, Manchego, Gouda, Croccatini, Champagne Grapes, Marcona Almonds, Truffle Olive Oil"
	},
	{
		name: 'Mama Maglione',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2095_1080x1080.jpg?v=1602445399',
		description: "We don't know who she is, but wouldn't someone named like her know some good eats?",
		ingredients: "Bresaola, Speck, Prosciutto di San Daniele, Robioa, Blueberry Goat Cheese, Gorgonzola Dolce, Sourdough Flatbreads, Mission Figs, Hazelnuts, Orange Marmalade"
	},
	{
		name: 'I Need a Doctor',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/Meat-Only-Board_1050x1050.jpg?v=1599857692',
		description: "Please consult with your primary care if your heart can handle this. Just kidding, it (probably) won't kill ya.",
		ingredients: "Jamon Iberico, Soppressata, Chorizo, Medium Vermont Cheddar, Parmigiano Reggiano, Gouda, Ritz, Artichoke Hearts, Chocolate Peanuts, Caramelized Onion Jam"
	},
	{
		name: 'The Number 4',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2093_1080x1080.jpg?v=1602444573',
		description: "Time-tested, fail-proof combination that always seems to be the best seller at every deli.",
		ingredients: "Mortadella, Soppressata, Capocollo, Parmigiano Reggiano, Gouda, Medium Vermont Cheddar, Toasted Baguettes, Cornichons, Yogurt Almonds, Sun-dried Tomato Puree"
	},
	{
		name: 'The Magnum',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/cheeseonly_1080x1080.jpg?v=1602386457',
		description: "This board is so good that you might as well go for a magnum bottle, just for yourself. Disclaimer: We only pair you with one regular-size bottles",
		ingredients: "Speck, Chorizo, Jamon Iberico, Parmigiano Reggiano, Robiola, Triple Creme Brie, Rosemary Raisin Pecan Crisps, Maraschino Cherries, Hazelnuts, Dijon Mustard"
	},
	{
		name: 'I Warned Ya!',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0308/1777/9849/products/IMG_2092_1080x1080.jpg?v=1602443864',
		description: "It's packed with flavor, heat and spices that I doubt you're able to handle it. Wait, are you sure? Well, don't tell me I didn't warned ya!",
		ingredients: "Chorizo, Capocollo, Soppressata, Robiola, Gouda, Manchego, Sourdough Flatbread, Wild Berries, Pistachios, Spicy Honey"
	},
]

const boardItems = [
	{
		type: "Meats",
		items: ["Prosciutto di San Daniele", "Mortadella", "Jamon Iberico", "Soppressata", "Bresaola", "Capocollo", "Spanish Chorizo", "Speck"]
	},
	{
		type: "Cheeses",
		items: ["Parmigiano Reggiano", "Manchego", "Robiola", "Gouda", "Vermont Cheddar", "Blueberry Goat Cheese", "Triple Creme Brie", "Gorgonzola Dolce"]
	},
	{
		type: "Crackers",
		items: ["Toasted Baguettes", "Multi-Seed", "Whole Wheat", "Sourdough Flatbreads", "Croccantinis", "Gluten-Free", "Raisin Pecan Crisps", "Ritz"]
	},
	{
		type: "Fruits",
		items: ["Mission Figs", "Champagne Grapes", "Wild Berries", "Luxardo Cherries", "Dried Apricots", "Mixed Olives", "Cornichons", "Artichoke Hearts"]
	},
	{
		type: "Nuts",
		items: ["Marcona Almonds", "Praline Pecans", "Pistachios", "Hazelnuts", "Macadamia Nuts", "Cashews", "Chocolate Peanuts", "Yogurt Almonds"]
	},
	{
		type: "Spreads",
		items: ["Spicy Honey", "Truffle Olive Oil", "Orange Marmalade", "Fig Jam", "Sun-dried Tomatoe Puree", "Dijon Mustard", "Caramelized Onion Jam", "Guacamole"]
	}
];

function Menus() {
  const {tabToDisplay} = useContext(MenuNavBarContext);

  if (tabToDisplay == "curated") {
    return (
      <div>
        <MenuNavBar />
        <Curated />
      </div>
    )
  } else if (tabToDisplay == "boardItems") {
    return (
      <div>
        <MenuNavBar />
        <BoardItems />
      </div>
    )
  } else {
    return (
      <div className="menus-wrapper">
				<h4>You can mix & match with so many options to choose!</h4>
				<div className="menus-board-items">
					{boardItems.map(boardItem => {
						return <MenuCard boardItem={boardItem}/>
					})}
				</div>
				<h4>Or, select from our chef's tastefully curated boards!</h4>
				<div id="orders_cards">
					{curated.map(board => {
						return <BoardCard board={board}/>
					})}
			</div>
      </div>
    );
  }

  /*
  current state of isActive is defaulted to "view-all".
  onClick handler changes isActive state based on the name of the MenuNavBar button. Then,
  the page renders respective MenusTab components ("view-all" for ViewAll.js, "curated" for Curated.js, "board-items" for BoardItems.js)

  or,

  you build out all separate components for all, and menus component will host bunch of if, else if statements to navigate.
  think of how chris used
  */



}

export default Menus;
