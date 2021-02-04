import React from 'react';
import './ReviewOrder.css';

function ReviewOrder () {
  return (
    <div className="review-order-wrapper">
      <h4>Review Your Order</h4>
      <h5>Your Charkoot Board</h5>
      <div className="review-order_board-review">
        <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        <p>props.boards.board_name</p>
        <p>props.boards.board_cost</p>
        <p>props.boards.board_description</p>
        <p>"Characteristics" Component</p>
      </div>
      <h5>Your Perfect Wine</h5>
      <div className="review-order_wine-review">
        <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        <p>props.wines.wine_name</p>
        <p>props.wines.wine_cost</p>
        <p>props.wines.wine_description</p>
        <p>"Characteristics" Component</p>
      </div>
      <h5>Shipping Information</h5>
      <div className="review-order_shipping-information">
        <div className="shipping-information_user-address">
          <input type="radio">Use my address</input>
          <input placeholder="Street Address">props.users.address1</input>
          <input placeholder="Suite/Apt #">props.users.address2</input>
          <input placeholder="City">props.users.city</input>
          <select placeholder="State">
            <option>CA</option>
            <option>NJ</option>
            <option>NY</option>
          </select>
          <input placeholder="Zip Code">props.users.zipcode</input>
        </div>
        <div className="shipping-information_new-address">
          <input type="radio">Use different address</input>
          <input placeholder="Street Address" />
          <input placeholder="Suite/Apt #" />
          <input placeholder="City" />
          <select placeholder="State">
            <option>CA</option>
            <option>NJ</option>
            <option>NY</option>
          </select>
          <input placeholder="Zip Code" />
        </div>
      </div>
      <div className="review-order_total">
        <table>
          <tr>
            <th>Food & Beverage</th>
            <td>props.boards.board_cost</td>
          </tr>
          <tr>
            <th>Delivery Charge</th>
            <td>$2.99</td>
          </tr>
          <tr>
            <th>Taxes</th>
            <td>FE calc : (F&B + Delivery) * 0.07 </td>
          </tr>
          <tr>
            <th>Order Total</th>
            <td>FE calc: F&B + Delivery + Taxes</td>
          </tr>
        </table>
        <button>CHECKOUT</button>
      </div>
    </div>
  )
}

export default ReviewOrder;
