import { put } from "redux-saga/effects";
import { types } from "../Redux/types";
import { getProductDetails } from "../Redux/ProductRedux";

export function* _getBannerList(api, action) {
    try {
        const response = yield api.getBanners(action.payload);
        if (response.data) {
            const { data } = response.data;
            // console.log("response ", data);
            yield put({ type: types.GET_BANNER_LIST_SUCCESS, payload: data });
        } else {
            yield put({ type: types.GET_BANNER_LIST_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}
export function* getCategories(api, action) {
    try {
        const response = yield api.getCategories(action.payload);
        // console.log("response-- ", response);
        if (response.data) {
            const { data } = response.data;
            // console.log("response ", data);
            yield put({ type: types.GET_CATEGORIES_SUCCESS, payload: data });
        } else {
            yield put({ type: types.GET_CATEGORIES_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}

export function* getProducts(api, action) {
    try {
        const response = yield api.getProducts(action.payload);
        // console.log("products  res-- ", response);
        if (response.data) {
            const { data } = response.data;
            // console.log("response ", data);
            yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
        } else {
            yield put({ type: types.GET_PRODUCTS_FAILURE, payload: null });
        }
    }
    catch (e) {
        console.log("ERROR-- ", e);

    }
}


