import React from 'react';
import './ViewAll.css';

function ViewAll() {
	return (
		<div className="menus-tab-wrapper">
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

export default ViewAll;
