import { takeEvery, takeLatest } from "redux-saga/effects";
import { types } from "../Redux/types";
import Api from "../Services";
import { _getRestaurantList } from "./ListSaga";
import { _getBannerList, getCategories, getProducts } from "./ProductSaga";
import { userSignupProcess } from "./UserSaga";

const api = Api.Api();


export default function* root() {
  yield takeLatest(types.GET_RESTAURANT_LIST, _getRestaurantList);
  yield takeLatest(types.GET_BANNER_LIST, _getBannerList, api);
  yield takeLatest(types.GET_CATEGORIES, getCategories, api);
  yield takeLatest(types.GET_PRODUCTS, getProducts, api);
  yield takeLatest(types.USER_REGISTER, userSignupProcess, api);
}
