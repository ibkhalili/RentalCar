

const initialState = {
    allCars: [],
    searchCar: ''
  };


const CarsReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'allCars/loadData':
        return { 
          ...state,
          allCars: action.payload
        }
      case 'searchCar/clearSearchCar':
        return {
          ...state,
          searchCar: ''
        }
      
      case 'searchCar/setSearchCar':
        return {...state, searchCar: action.payload};
      default:
        return state;
    }
  };

  export default CarsReducer;