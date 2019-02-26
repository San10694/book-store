import { combineReducers } from "redux";
import ListReducer from "./ListRedux";
import ProductReducer from "./ProductRedux";
import CartReducer from "./CartRedux";

const rootReducer = combineReducers({
  restaurantList: ListReducer,
  product: ProductReducer,
  cartItems: CartReducer,
});

export default rootReducer;
