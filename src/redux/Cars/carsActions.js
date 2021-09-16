import allCarsData from 'data';
import { SET_SEARCH_CAR } from 'redux/Cars/carsReducer';

export const setSearchCar = (car) => {
  return {
    type: SET_SEARCH_CAR,
    payload: car,
  };
};

export const clearSearchCar = () => {
  return {
    type: 'searchCar/clearSearchCar',
  };
};

export const loadData = () => {
  return {
    type: 'allCars/loadData',
    payload: allCarsData,
  };
};
