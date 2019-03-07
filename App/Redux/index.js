import { combineReducers } from "redux";
import ListReducer from "./ListRedux";
import ProductReducer from "./ProductRedux";
import CartReducer from "./CartRedux";
import UserReducer from './UserRedux';
import UserAddressReducer from './UserAddressRedux';
import WishListReducer from "./WishListRedux";

const rootReducer = combineReducers({
  restaurantList: ListReducer,
  product: ProductReducer,
  cartItems: CartReducer,
  wishList: WishListReducer,
  user: UserReducer,
  address: UserAddressReducer,
  wishList: WishListReducer
});

export default rootReducer;
