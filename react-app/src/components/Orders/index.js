import React from 'react';
import './Orders.css';

function Orders() {
	return (
		<div className="orders-wrapper">
			<div className="orders-start-order">
				<h4>Let's get you started!</h4>
				<p>Build your own delicious board now!</p>
				<button>START ORDER</button>
			</div>
			<h4>Select or Customize from our curated specialties</h4>
			<div className="orders-curated-items">
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>ADD TO ORDER</button>
					<button>CUSTOMIZE</button>
				</div>
				<div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>ADD TO ORDER</button>
					<button>CUSTOMIZE</button>
				</div>
        <div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>ADD TO ORDER</button>
					<button>CUSTOMIZE</button>
				</div>
        <div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>ADD TO ORDER</button>
					<button>CUSTOMIZE</button>
				</div>
        <div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>ADD TO ORDER</button>
					<button>CUSTOMIZE</button>
				</div>
        <div className="menus-curated_card">
					<p>props.boards.board_name</p>
					<img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
					<p>props.boards.description</p>
					<button>ADD TO ORDER</button>
					<button>CUSTOMIZE</button>
				</div>
			</div>
		</div>
	);
}

export default Orders;
