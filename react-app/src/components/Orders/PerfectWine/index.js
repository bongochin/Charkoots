import React from 'react';
import './PerfectWine.css'

function PerfectWine () {
  return (
    <div className="perfect-wine-wrapper">
      <h4>" MmmmmHmm! That's one tasty Charkoot board! " - Samuel L. Jackson</h4>
      <div className="perfect-wine_board-rendering">
        <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        <p>props.board_items.item_image</p>
      </div>
      <h4>It seems like your board is ...</h4>
      <div className="perfect-wine_board-characteristics">
       <p>"Characteristics" Component</p>
      </div>
      <h4>... and we have the PERFECT wine for it!</h4>
      <div className="perfect-wine_display">
        <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        <p>props.wines.wine_name</p>
        <p>props.wines.wine_type</p>
        <p>props.wines.wine_description</p>
        <p>"Characteristics" Component</p>
      </div>
      <button>ADD & REVIEW YOUR ORDER</button>
    </div>
  );
};

export default PerfectWine;