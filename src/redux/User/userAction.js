import axios from 'axios';
import {
  LOGIN_FAILURE,
  LOGIN_REDIRECT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from 'redux/User/constants';
import { APP_LOGIN_TOKEN, APP_LOGIN_USER } from 'common/utils/constants';

export const userLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const userLoginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const userLoginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const userLoginRedirect = () => ({
  type: LOGIN_REDIRECT,
});

export const userLogoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const loginUser = (credentials) =>
  function (dispatch) {
    dispatch(userLoginRequest());
    axios
      .post('/authenticate', credentials)
      .then((response) => {
        const { data } = response;
        localStorage.setItem(APP_LOGIN_TOKEN, data?.id_token);
        localStorage.setItem(APP_LOGIN_USER, credentials?.username);
        dispatch(
          userLoginSuccess({
            token: data?.id_token,
            username: credentials?.username,
          }),
        );
        dispatch(userLoginRedirect());
        // window.location.href = '/services';
      })
      .catch((error) => {
        dispatch(userLoginFailure(error.response.data.error));
      });
  };
