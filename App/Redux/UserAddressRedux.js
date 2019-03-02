import { types } from "./types";
const initialState = {
    address: '',
    isFetching: false
};

export default function UserAddressReducer(state = initialState, action) {
    //console.log("Product Action ", action);
    const { payload } = action;
    switch (action.type) {
        case types.GET_ADDRESS_LIST:
            return {
                ...state,
                address: payload,
                isFetching: true
            };
        case types.GET_ADDRESS_LIST_SUCCESS:
            return {
                ...state,
                address: payload,
                isFetching: true
            };
        case types.GET_ADDRESS_LIST_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        case types.ADD_ADDRESS:
            return {
                ...state,
                address: payload,
                isFetching: false
            };
        case types.ADD_ADDRESS_SUCCESS:
            return {
                ...state,
                address: payload,
                isFetching: false
            };
        case types.ADD_ADDRESS_FAILURE:
            return {
                ...state,
                isFetching: false
            };


        default:
            return state;
    }
}

///Action Creators
export function addAddress(data) {
    return {
        type: types.ADD_ADDRESS,
        payload: data
    };
}


