import {
  CLEAR_SEARCH_CAR,
  GET_CARS_FAILURE,
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  LOAD_DATA,
  SET_SEARCH_CAR,
} from './constants.js';

const initialState = {
  allCars: [],
  isLoading: false,
  searchCar: '',
};

const CarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CARS_SUCCESS:
      return {
        ...state,
        allCars: action.payload,
        isLoading: false,
      };
    case GET_CARS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SET_SEARCH_CAR:
      return {
        ...state,
        searchCar: action.payload,
      };
    case CLEAR_SEARCH_CAR:
      return {
        ...state,
        searchCar: '',
      };
    case LOAD_DATA:
      return { ...state, allCars: action.payload };
    default:
      return state;
  }
};

export default CarsReducer;
