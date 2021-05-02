import React from "react";
import "../css/Product.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../redux/actions/cartActions";

function Product(props) {
  const addToBasket = (product) => {
    props.actions.addToCart({ product, quantity: 1 });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.product.productData.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.product.productData.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.product.productData.rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
          <p>*</p>
        </div>
      </div>
      <img src={props.product.productData.image} alt="" />
      <button onClick={() => addToBasket(props.product)}>Add to Basket</button>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(Product);
