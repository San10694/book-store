import { types } from "./types";
const initialState = {
    isFetching: false,
    error: false,
    bannerList: null,
    categories: null,
    productDetails: null,
    showPopup: true,
    isCancellClicked: false
    // productDetail: null
};

export default function ProductReducer(state = initialState, action) {
    //console.log("Product Action ", action);
    const { payload } = action;
    switch (action.type) {
        case types.GET_BANNER_LIST:
            return {
                ...state,
                isFetching: true
            };
        case types.GET_BANNER_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                banner: payload
            };
        case types.GET_BANNER_LIST_FAILURE:
            return {
                ...state,
                isFetching: false
                //contacts: action.data
            };
        case types.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: payload
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                productDetails: payload
            };

        case types.RESET_LOADER:
            return {
                ...state,
                isFetching: false,
            };
        case types.SAVE_POPUP_FLAG:
            return {
                ...state,
                isFetching: false,
                showPopup: payload,
                isCancellClicked: true
            };

        default:
            return state;
    }
}

///Action Creators
export function getBannerList() {
    return {
        type: types.GET_BANNER_LIST,
        payload: null
    };
}

export function getCategories() {
    return {
        type: types.GET_CATEGORIES,
        payload: null
    };
}
export function getProducts(flag) {
    return {
        type: types.GET_PRODUCTS,
        payload: flag
    };
}

export function savePopupFlag(flag) {
    return {
        type: types.SAVE_POPUP_FLAG,
        payload: flag
    };
}
