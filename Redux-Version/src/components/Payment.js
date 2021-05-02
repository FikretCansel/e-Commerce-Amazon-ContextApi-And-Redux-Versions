import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Payment(props) {
  return (
    <div className="payment">
      <h1>
        Checkout(<Link to="/checkout">{props.cartItems.length} items</Link>)
      </h1>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>{props.user.email}</p>
          <p>123 React Lane</p>
          <p>Lost Angeles, CA</p>
        </div>
      </div>

      <div className="payment__section">
        <div className="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment__items">
          {props.cartItems.map((item) => (
            <CheckoutProduct
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="payment__section"></div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.userReducer,
    cartItems: state.cartReducer,
  };
}

export default connect(mapStateToProps)(Payment);
