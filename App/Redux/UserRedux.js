import { types } from "./types";
const initialState = {
    user: '',
    isRegister: false,
    isLoading: true,
    isLoggedIn: false,
    verifyOtp: false,
    otp: ''
};

///Action Creators
export function userSignup(mobile) {
    // console.log('ooooooooooooo', mobile);
    return {
        type: types.USER_REGISTER,
        payload: mobile
    };
}

export function userLogin(mobile) {
    // console.log('ooooooooooooo', mobile);
    return {
        type: types.USER_LOGIN,
        payload: mobile
    };
}

export function otpVerify(data) {
    // console.log('ooooooooooooo', mobile);
    return {
        type: types.OTP_VERIFY,
        payload: data
    };
}

export default function UserReducer(state = initialState, action) {
    console.log("user Action ", action);
    const { payload } = action;
    switch (action.type) {

        case types.USER_REGISTER: {
            return {
                ...state,
                isRegister: true,
            }
        }
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                isRegister: true,
            };

        case types.USER_REGISTER_FAILURE:
            return {
                ...state,
                isRegister: false,
            };

        case types.USER_LOGIN: {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: payload
            }
        }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: payload
            };

        case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            };

        case types.OTP_VERIFY: {
            return {
                ...state,
                verifyOtp: true,
                otp: payload
            }
        }
        case types.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                verifyOtp: true,
                otp: payload
            };

        case types.OTP_VERIFY_FAILURE:
            return {
                ...state,
                verifyOtp: false
            };
        default:
            return state;
    }
}



