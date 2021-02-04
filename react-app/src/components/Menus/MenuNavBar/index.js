import React from 'react';
import './MenuNavBar.css';

function MenuNavBar () {
  return (
    <div className="menu-navbar-wrapper">
      <div className="menu-navbar">
				<button>View All</button>
				<button>Curated</button>
				<button>Meats</button>
				<button>Cheeses</button>
				<button>Crackers</button>
				<button>Fruits</button>
				<button>Nuts</button>
				<button>Spreads</button>
			</div>
    </div>
  )
}

export default MenuNavBar;
