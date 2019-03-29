import { types } from "./types";
const initialState = {
  isFetching: false,
  error: false,
  list: null,
  counter: 0
};

export default function ListReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case types.GET_RESTAURANT_LIST:
      return {
        ...state,
        //contacts: [],
        isFetching: true
      };
    case types.GET_RESTAURANT_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: payload
      };
    case types.GET_RESTAURANT_LIST_FAILURE:
      return {
        ...state,
        isFetching: false
        //contacts: action.data
      };
    case types.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
        //contacts: action.data
      };
    default:
      return state;
  }
}

///Action Creators
export function getRestaurantList() {
  return {
    type: types.GET_RESTAURANT_LIST,
    payload: null
  };
}

export function incrementCounter(count) {
  return {
    type: types.INCREMENT_COUNTER,
    payload: count
  };
}
