import { put } from "redux-saga/effects";
import { types } from "../Redux/types";
import Api from '../Services';

const api = Api.Api();

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
        const response = yield api.addAddress(action.payload.data);
        console.log('kkkkkkkkkkkkkkk', JSON.stringify(action.payload))
        if (response) {
            const { data } = response;

            if (data.Error === '0000') {
                api.getAddress(action.payload.data.customer_id).then(res => {
                    console.log('kkkkkkkkkkkk');
                })
                action.payload.navigate('AddressListScreen');

            }

            console.log("response add addresss", JSON.stringify(response));
            yield put({ type: types.ADD_ADDRESS_SUCCESS, payload: data });
        } else {

            yield put({ type: types.ADD_ADDRESS_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}