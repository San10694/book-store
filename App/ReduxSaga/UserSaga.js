import { put } from "redux-saga/effects";
import { types } from "../Redux/types";
import { Alert } from 'react-native';

export function* userSignupProcess(api, action) {
    const { payload } = action
    try {
        const response = yield api.otpVerifyReg(payload);
        if (response) {
            console.log("userSignupProcess response- ", response);
            const { data } = response;
            if (data.Error === "0000") {
                payload.navigate('HomeTab')
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
    const { payload } = action

    try {
        const response = yield api.userLogin(payload.mobile);
        if (response) {
            const { data } = response;
            console.log("userLoginProcess response- ", response);

            if (data.Error === "0000") {
                payload.navigate("LoginOtpScreen", { number: payload.mobile });

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
    const { payload } = action;
    try {
        const response = yield api.otpVerify(payload);
        console.log("userOtpVerify response- ", response);
        if (response) {
            const { data } = response;

            if (data.Error === "0000") {
                payload.navigate('HomeTab')
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