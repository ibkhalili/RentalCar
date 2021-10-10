import allCarsData from '../../data';

import {
  SET_SEARCH_CAR,
  CLEAR_SEARCH_CAR,
  LOAD_DATA,
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
} from './constants';
import axios from 'axios';
import { APP_LOGIN_TOKEN } from 'common/utils/constants';
import {
  getUsersFailure,
  getUsersSuccess,
  usersRequestAction,
} from 'redux/Administration/adminActions';
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from 'redux/Administration/constants';

export const setSearchCar = (car) => {
  return {
    type: SET_SEARCH_CAR,
    payload: car,
  };
};

export const clearSearchCar = () => {
  return {
    type: CLEAR_SEARCH_CAR,
  };
};

export const loadData = () => {
  return {
    type: LOAD_DATA,
    payload: allCarsData,
  };
};

export const carsRequestAction = () => ({
  type: GET_CARS_REQUEST,
});

export const getCarsSuccess = (cars) => ({
  type: GET_CARS_SUCCESS,
  payload: cars,
});

export const getCarsFailure = (error) => ({
  type: GET_CARS_FAILURE,
  payload: error,
});

export const getCarsAction = () =>
  function (dispatch) {
    dispatch(carsRequestAction()); // isLoading -> true
    axios
      .get('/cars/public?sort=available,desc')
      .then((response) => {
        const { data } = response;
        console.log('data', data);
        dispatch(getCarsSuccess(data?.content)); // cars -> data, isLoading -> false
      })
      .catch((error) => {
        console.log('error', error);
        dispatch(getCarsFailure(error?.response?.data?.error)); // isLoading ->
      });
  };
