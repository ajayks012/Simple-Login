import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Actions/Type";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
