import { types } from "./types";
const initialState = {
    user: '',
    isRegister: false,
    isLoading: true,
    isLoggedIn: false,
    verifyOtp: false,
};

///Action Creators
export function otpVerifyReg(otp) {
    // console.log('ooooooooooooo', mobile);
    return {
        type: types.USER_REGISTER,
        payload: otp
    };
}

export function userLogin(data) {
    // console.log('ooooooooooooo', mobile);
    return {
        type: types.USER_LOGIN,
        payload: data
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
                user: ''
            }
        }
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                isRegister: true,
                user: ''
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
                // user: payload
            }
        }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                // user: payload
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
                user: payload
            }
        }
        case types.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                verifyOtp: true,
                user: payload
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



