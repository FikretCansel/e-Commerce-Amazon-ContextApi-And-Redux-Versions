import React, { useEffect, useState } from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { connect } from "react-redux";

function Checkout(props) {
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  useEffect(() => {
    var cart = props.cartItems;
    var price = 0;
    cart.map((c) => {
      price += c.product.productData.price * c.quantity;
    });
    setSubTotalPrice(price);
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {props.cartItems.map((item) => (
            <CheckoutProduct
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal subTotalPrice={subTotalPrice} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartReducer,
  };
}

export default connect(mapStateToProps)(Checkout);
