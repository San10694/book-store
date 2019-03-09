import { types } from "./types";
const initialState = {
    user: null,
    isRegister: false,
    isLoading: false,
    isLoggedIn: false,
    verifyOtp: false,
};

///Action Creators
export function otpVerifyReg(data) {
    // console.log('ooooooooooooo', mobile);
    return {
        type: types.USER_REGISTER,
        payload: data
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
export function logout() {
    // console.log('ooooooooooooo', mobile);
    return {
        type: types.LOG_OUT,
        payload: null
    };
}



export default function UserReducer(state = initialState, action) {
    console.log("USER Action ", action);
    const { payload } = action;
    switch (action.type) {

        case types.USER_REGISTER: {
            return {
                ...state,
                isRegister: false,
                isLoggedIn: false,
                user: null
            }
        }
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                isRegister: true,
                isLoggedIn: payload.Status === 'success' ? true : false,
                user: payload
            };

        case types.USER_REGISTER_FAILURE:
            return {
                ...state,
                isRegister: false,
                isLoggedIn: false,
            };

        case types.USER_LOGIN: {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                // user: payload
            }
        }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: payload.Status === 'success' ? true : false,
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
                user: null
            }
        }
        case types.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                verifyOtp: true,
                user: payload,
                isLoggedIn: payload.Status === 'success' ? true : false,
            };
        case types.LOG_OUT:
            return {
                ...state,
                verifyOtp: true,
                user: null,
                isLoggedIn: false

            };

        case types.OTP_VERIFY_FAILURE:
            return {
                ...state,
                verifyOtp: false,
                isLoggedIn: false,

            };
        default:
            return state;
    }
}



