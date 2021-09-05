
import axios from 'axios';
import {
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
} from './userTypesActions';

export const userSignupRequest = () => ({
  type: REGISTER_REQUEST,
});

export const userSignupSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const userSignupFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const registerUser = data => function (dispatch) {
  dispatch(userSignupRequest());
  axios
    .post('/signup', data)
    .then(response => {
      const { data } = response;
      dispatch(userSignupSuccess(data));
      window.location.href = '/cars';
    })
    .catch(error => {
      dispatch(userSignupFailure(error.response.data.error));
    });
};
