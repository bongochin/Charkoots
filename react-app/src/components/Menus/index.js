import React, { useState } from 'react';
import MenuNavBar from './MenuNavBar';
import ViewAll from './MenusTab/ViewAll'
import Curated from './MenusTab/Curated'
import BoardItems from './MenusTab/BoardItems'
import './Menus.css';


function Menus() {
  const [tabToDisplay, setTabToDisplay] = useState("board-items")

  function onClickHandler (e) {

  }

  if (tabToDisplay == "view-all") {
    return <ViewAll />
  } else if (tabToDisplay == "curated") {
    return <Curated />
  } else if (tabToDisplay == "board-items") {
    return <BoardItems />
  } else {
    return (
      <div className="menus-wrapper">
        <MenuNavBar />
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
