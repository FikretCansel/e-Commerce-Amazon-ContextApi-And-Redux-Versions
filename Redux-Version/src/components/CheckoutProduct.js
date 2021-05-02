import React from "react";
import "../css/CheckoutProduct.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "../redux/actions/cartActions";

function CheckoutProduct(props) {
  const removeProduct = () => {
    props.actions.removeFromCart(props.product);
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={props.product.productData.image}
        alt=""
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          {props.product.productData.title}
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.product.productData.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.product.productData.rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
          <h1>Quantity : {props.quantity}</h1>
        </div>
        <button onClick={() => removeProduct()}>Remove from basket</button>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(CheckoutProduct);
