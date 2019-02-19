import { combineReducers } from "redux";
import ListReducer from "./ListRedux";
import ProductReducer from "./ProductRedux";

const rootReducer = combineReducers({
  restaurantList: ListReducer,
  product: ProductReducer
});

export default rootReducer;
