import { put } from "redux-saga/effects";
import { types } from "../Redux/types";
import { Alert } from 'react-native';

export function* userSignupProcess(api, action) {
    try {
        const response = yield api.otpVerifyReg(action.payload);
        if (response) {

            console.log("response ", JSON.stringify(response));
            const { data } = response;
            console.log("response login", JSON.stringify(data));
            if (data.Error === "0000") {
                action.payload.navigate('HomeTab')
            }
            else {
                Alert.alert(
                    'Error ',
                    data.Message,
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                console.log('ok')
                            },
                        },
                    ],
                    {
                        cancelable: false,
                    }
                );
            }

            yield put({ type: types.USER_REGISTER_SUCCESS, payload: data });
        } else {
            yield put({ type: types.USER_REGISTER_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}

export function* userLoginProcess(api, action) {
    try {
        const response = yield api.userLogin(action.payload.mobile);
        if (response) {
            const { data } = response;
            console.log("response login", JSON.stringify(data));

            if (data.Error === "0000") {
                action.payload.navigate("LoginOtpScreen", { number: action.payload.mobile });

            }
            else {
                Alert.alert(
                    'Error ',
                    data.Message,
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                console.log('ok')
                            },
                        },
                    ],
                    {
                        cancelable: false,
                    }
                );
            }

            yield put({ type: types.USER_LOGIN_SUCCESS, payload: data });
        } else {

            yield put({ type: types.USER_LOGIN_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}

export function* userOtpVerify(api, action) {
    try {
        const response = yield api.otpVerify(action.payload);
        if (response) {
            const { data } = response;
            console.log("response otp", JSON.stringify(data));
            if (data.Error === "0000") {
                action.payload.navigate('HomeTab')
            }
            else {
                Alert.alert(
                    'Error ',
                    data.Message,
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                console.log('ok')
                            },
                        },
                    ],
                    {
                        cancelable: false,
                    }
                );
            }
            yield put({ type: types.OTP_VERIFY_SUCCESS, payload: data });
        } else {
            yield put({ type: types.OTP_VERIFY_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}