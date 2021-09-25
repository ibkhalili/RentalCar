
import allCarsData from 'data.js';
import { SET_SEARCH_CAR, CLEAR_SEARCH_CAR, LOAD_DATA} from './constants.js';

const initialState = {
    allCars: allCarsData,
    searchCar: ''
  };

const CarsReducer = (state = initialState, action) => {

    switch(action.type) {
      case SET_SEARCH_CAR:
        return { 
          ...state,
          searchCar: action.payload
        }
      case CLEAR_SEARCH_CAR:
        return {
          ...state,
          searchCar: ''
        }
      case LOAD_DATA:
        return {...state, allCars: action.payload};
      default:
        return state;
    }
  };

  export default CarsReducer;