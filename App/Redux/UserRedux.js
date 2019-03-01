import { types } from "./types";
const initialState = {
    user: '',
    isRegister: false
};

export default function UserReducer(state = initialState, action) {
    console.log("user Action ", action);
    const { payload } = action;
    switch (action.type) {

        case types.USER_REGISTER: {
            return {
                ...state,
                isRegister: true
            }
        }
        case types.USER_REGISTER_SUCCESS:
            return {
                ...state,
                isRegister: false,
                payload: user
            };

        case types.USER_REGISTER_FAILURE:
            return {
                ...state,
                isRegister: false,
            };
        default:
            return state;
    }
}

///Action Creators
export function userSignup({ mobile }) {
    return {
        type: types.USER_REGISTER,
        mobile
    };
}

