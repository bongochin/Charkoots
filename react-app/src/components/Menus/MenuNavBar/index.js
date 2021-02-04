import React, { useState } from 'react';
import './MenuNavBar.css';

function MenuNavBar () {
	const [tabToDisplay, setTabToDisplay] = useState("")
	console.log('STATE: ', tabToDisplay)
  return (
    <div className="menu-navbar-wrapper">
      <div className="menu-navbar">
				<button value="view-all" onClick={e => setTabToDisplay(e.target.value)}>View All</button>
				<button value="curated" onClick={e => setTabToDisplay(e.target.value)}>Curated</button>
				<button value="BoardItems" onClick={e =>setTabToDisplay(e.target.value)}>Meats</button>
				<button value="BoardItems" onClick={e =>setTabToDisplay(e.target.value)}>Cheeses</button>
				<button value="BoardItems" onClick={e =>setTabToDisplay(e.target.value)}>Crackers</button>
				<button value="BoardItems" onClick={e =>setTabToDisplay(e.target.value)}>Fruits</button>
				<button value="BoardItems" onClick={e =>setTabToDisplay(e.target.value)}>Nuts</button>
				<button value="BoardItems" onClick={e =>setTabToDisplay(e.target.value)}>Spreads</button>
			</div>
    </div>
  )
}

export default MenuNavBar;
