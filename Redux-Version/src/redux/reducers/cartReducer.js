//import * as userActions from "../actions/userActions";
import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );

      if (addedItem) {
        var newCart1 = state.map((item) => {
          if (item.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          } else return item;
        });
        return newCart1;
      } else {
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_CART:
      const index = state.findIndex(
        (cartItem) => cartItem.product.id === action.payload.id
      );
      let newCart = [...state];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warm("Cant remove prduct");
      }
      return newCart;
    
    default:
      return state;
  }
}
