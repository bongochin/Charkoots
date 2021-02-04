import React, { useContext, useState } from 'react';
import './MenuNavBar.css';
import {MenuNavBarContext} from '../../../context/MenuNavBarContext'

function MenuNavBar () {
	const {setTabToDisplay} = useContext(MenuNavBarContext);

  return (
    <div className="menu-navbar-wrapper">
      <div className="menu-navbar">
				<button value="view-all" onClick={e => setTabToDisplay(e.target.value)}>View All</button>
				<button value="curated" onClick={e => setTabToDisplay(e.target.value)}>Curated</button>
				<button value="boardItems" onClick={e =>setTabToDisplay(e.target.value)}>Meats</button>
				<button value="boardItems" onClick={e =>setTabToDisplay(e.target.value)}>Cheeses</button>
				<button value="boardItems" onClick={e =>setTabToDisplay(e.target.value)}>Crackers</button>
				<button value="boardItems" onClick={e =>setTabToDisplay(e.target.value)}>Fruits</button>
				<button value="boardItems" onClick={e =>setTabToDisplay(e.target.value)}>Nuts</button>
				<button value="boardItems" onClick={e =>setTabToDisplay(e.target.value)}>Spreads</button>
			</div>
    </div>
  )
}

export default MenuNavBar;
