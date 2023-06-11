import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Type";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
