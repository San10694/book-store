import { put } from "redux-saga/effects";
import { types } from "../Redux/types";

export function* userSignupProcess(api, action) {
    try {
        const response = yield api.userSignup(action.payload);
        if (response.data) {
            const { data } = response.data;
            console.log("response ", data);
            yield put({ type: types.USER_REGISTER_SUCCESS, payload: data });
        } else {
            yield put({ type: types.USER_REGISTER_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}
