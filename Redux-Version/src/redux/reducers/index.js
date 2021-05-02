import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  userReducer,
  cartReducer,
});

export default reducer;
