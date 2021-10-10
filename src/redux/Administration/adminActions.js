import axios from 'axios';
import { APP_LOGIN_TOKEN } from 'common/utils/constants';
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from 'redux/Administration/constants';

export const usersRequestAction = () => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const getUsersAction = () =>
  function (dispatch) {
    dispatch(usersRequestAction()); // isLoading -> true
    axios
      .get('/users', {
        headers: {
          Authorization: `Bearer ${
            localStorage?.getItem(APP_LOGIN_TOKEN) || ''
          }`,
        },
      })
      .then((response) => {
        const { data } = response;
        dispatch(getUsersSuccess(data)); // users -> data, isLoading -> false
      })
      .catch((error) => {
        dispatch(getUsersFailure(error.response.data.error)); // isLoading ->
      });
  };
