

import allCarsData from "../../data";


export const setSearchCar = (car) => {
    return {
        type: 'searchCar/setSearchCar',
        payload: car
    };
};

export const clearSearchCar = () => {
    return {
        type: 'searchCar/clearSearchCar'
    };
};

export const loadData = () => {
    return { 
      type: 'allCars/loadData', 
      payload: allCarsData
    };
  };