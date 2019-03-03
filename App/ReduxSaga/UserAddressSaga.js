import { put } from "redux-saga/effects";
import { types } from "../Redux/types";
import { Alert } from 'react-native';

export function* getUserAddress(api, action) {
    try {
        const response = yield api.getAddress(action.payload);
        if (response) {
            const { data } = response;
            console.log("response addttttttttttttttttt", data);
            yield put({ type: types.GET_ADDRESS_LIST_SUCCESS, payload: data });
        } else {
            yield put({ type: types.GET_ADDRESS_LIST_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}

export function* addUserAddress(api, action) {
    try {
        const response = yield api.addAddress(action.payload);
        if (response) {
            const { data } = response;
            console.log("response addresss", JSON.stringify(data));
            yield put({ type: types.ADD_ADDRESS_SUCCESS, payload: data });
        } else {

            yield put({ type: types.ADD_ADDRESS_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}