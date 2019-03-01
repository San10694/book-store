import { combineReducers } from "redux";
import ListReducer from "./ListRedux";
import ProductReducer from "./ProductRedux";
import CartReducer from "./CartRedux";
import UserReducer from './UserRedux';

const rootReducer = combineReducers({
  restaurantList: ListReducer,
  product: ProductReducer,
  cartItems: CartReducer,
  user: UserReducer
});

export default rootReducer;
