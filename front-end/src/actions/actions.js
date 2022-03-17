import axios from "axios";
export const USER_LOGIN = "USER_LOGIN";
export const USER_SIGNUP = "USER_SIGNUP";

export const FETCH_FITNESS_SUCCESS = "FETCH_FITNESS_SUCCESS";
export const FETCH_FITNESS_FAIL = "FETCH_FITNESS_FAIL";

export const userLogin = (dispatch) => {
  dispatch({ type: USER_LOGIN });

  axios
    .post("https://dan-fitness-app.herokuapp.com/user/signin")
    .then((data) => {
      dispatch({ type: FETCH_FITNESS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FITNESS_FAIL, payload: err.message });
    });
};

export const userSignup = (dispatch) => {
  dispatch({ type: USER_SIGNUP });

  axios
    .post("https://dan-fitness-app.herokuapp.com/user/signup")
    .then((data) => {
      dispatch({ type: FETCH_FITNESS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FITNESS_FAIL, payload: err.message });
    });
};
