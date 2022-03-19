import axios from "axios";
import { url } from "../api";
export const USER_LOGIN = "USER_LOGIN";
export const USER_SIGNUP = "USER_SIGNUP";

export const FETCH_FITNESS_SUCCESS = "FETCH_FITNESS_SUCCESS";
export const FETCH_FITNESS_FAIL = "FETCH_FITNESS_FAIL";

export const userLogin = (user) => (dispatch) => {
  dispatch({ type: USER_LOGIN });

  axios
    .post(
      `${url}/user/login`,
      user,

      { withCredentials: true }
    )
    .then((data) => {
      localStorage.setItem("token", data.data.token);
      dispatch({ type: FETCH_FITNESS_SUCCESS, payload: data.data.data });
      console.log(data.data.token);
    })
    .catch((err) => {
      dispatch({ type: FETCH_FITNESS_FAIL, payload: err.message });
    });
};

export const userSignup = (user) => (dispatch) => {
  dispatch({ type: USER_SIGNUP });

  axios
    .post(`${url}/user/register`, user, {
      withCredentials: true,
    })
    .then((data) => {
      localStorage.setItem("token", data.data.token);
      dispatch({ type: FETCH_FITNESS_SUCCESS, payload: data });
      console.log(data.data.token);
    })
    .catch((err) => {
      dispatch({ type: FETCH_FITNESS_FAIL, payload: err.message });
    });
};
