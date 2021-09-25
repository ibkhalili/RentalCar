

import allCarsData from '../../data';

import { SET_SEARCH_CAR, CLEAR_SEARCH_CAR, LOAD_DATA} from './constants';

export const setSearchCar = (car) => {
  return {
    type: SET_SEARCH_CAR,
    payload: car
  };
};

export const clearSearchCar = () => {
  return {
    type: CLEAR_SEARCH_CAR
  };
};

export const loadData = () => {
  return {
    type: LOAD_DATA,
    payload: allCarsData
  };
};