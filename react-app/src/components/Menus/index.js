import React, { useContext, useState } from 'react';
import MenuNavBar from './MenuNavBar';
import { tabToDisplay } from './MenuNavBar';
import Curated from './MenusTab/Curated'
import BoardItems from './MenusTab/BoardItems'
import './Menus.css';
import {MenuNavBarContext} from '../../context/MenuNavBarContext'


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
        <MenuNavBar />
        <div className="menus-start-order">
				<h4>Let's get you started!</h4>
				<p>Build your own delicious board now!</p>
				<button>START ORDER</button>
			</div>
			<h4>You can mix & match with so many options to choose!</h4>
			<div className="menus-board-items">
				{/* look at event cards and see how it renders. can this be shorter? */}
				<div className="menus-board-items_card">
					<p id="board-items-column_title">Meats</p>
					<p>props.board_items.type == 'Meats'</p>
					<button>INFO</button>
				</div>
				<div className="menus-board-items_card">
					<p id="board-items-column_title">Cheeses</p>
					<p>props.board_items.type == 'Cheeses'</p>
					<button>INFO</button>
				</div>
				<div className="menus-board-items_card">
					<p id="board-items-column_title">Crackers</p>
					<p>props.board_items.type == 'Crackers'</p>
					<button>INFO</button>
				</div>
				<div className="menus-board-items_card">
					<p id="board-items-column_title">Fruits</p>
					<p>props.board_items.type == 'Fruits'</p>
					<button>INFO</button>
				</div>
				<div className="menus-board-items_card">
					<p id="board-items-column_title">Nuts</p>
					<p>props.board_items.type == 'Nuts'</p>
					<button>INFO</button>
				</div>
				<div className="menus-board-items_card">
					<p id="board-items-column_title">Spreads</p>
					<p>props.board_items.type == 'Spreads'</p>
					<button>INFO</button>
				</div>
			</div>
			<h4>Or, select from our chef's tastefully curated boards!</h4>
			<div className="menus-curated-items">
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>START ORDER</button>
				</div>
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>START ORDER</button>
				</div>
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>START ORDER</button>
				</div>
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>START ORDER</button>
				</div>
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>START ORDER</button>
				</div>
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>START ORDER</button>
				</div>
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
