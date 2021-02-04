import React from 'react';
import './OrderingSequence.css'

function OrderingSequence () {
  return (
    <div className="ordering-sequence-wrapper">
      <h4>Charkoots Board Builder</h4>
      <div className="ordering-sequence_progress-bar">
        <button>Meats</button>
        <button>Cheeses</button>
        <button>Crackers</button>
        <button>Fruits</button>
        <button>Nuts</button>
        <button>Spreads</button>
      </div>
      <div className="ordering-sequence_board-rendering">
        <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        <p>props.board_items.item_image</p>
      </div>
      <div className="ordering-sequence_navigation-bar">
        <button>PREVIOUS</button>
        <button>NEXT</button>
        {/* SUBMIT button for last phase */}
      </div>
      <div className="ordering-sequence_item-selection-board">
        <div className="selection-board_left">
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
        </div>
        <div className="selection-board_center">
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
        </div>
        <div className="selection-board_right">
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
          <input type="radio">props.board_items.item_type</input>
        </div>
      </div>
    </div>
  )
}

export default OrderingSequence;
