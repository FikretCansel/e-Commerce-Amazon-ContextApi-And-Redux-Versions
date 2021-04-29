import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispath]=useStateValue();
    const removeProduct=()=>{
        console.log(id);
        dispath({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }

      
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeProduct}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
