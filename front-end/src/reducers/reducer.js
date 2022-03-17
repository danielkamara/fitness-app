import {
  FETCH_FITNESS_FAIL,
  FETCH_FITNESS_SUCCESS,
  USER_LOGIN,
  USER_SIGNUP,
} from "../actions/actions";

const initialState = {
  userData: {},
  isLoading: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userData: state.userData,
        error: "",
        isLoading: true,
      };
    case USER_SIGNUP:
      return {
        ...state,
        userData: state.userData,
        error: "",
        isLoading: true,
      };
    case FETCH_FITNESS_FAIL:
      return {
        ...state,
        userData: state.userData,
        error: action.payload,
        isLoading: false,
      };
    case FETCH_FITNESS_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
}
