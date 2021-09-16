const initialState = {
  allCars: [
    { name: 'dacia', price: 24540, id: 1 },
    { name: 'renault', price: 54450, id: 2 },
    { name: 'mercedes', price: 246540, id: 3 },
  ],
  searchCar: '',
};

export const SET_SEARCH_CAR = 'searchCar/setSearchCar';

const CarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'allCars/loadData':
      return {
        ...state,
        allCars: action.payload,
      };
    case 'searchCar/clearSearchCar':
      return {
        ...state,
        searchCar: '',
      };

    case SET_SEARCH_CAR:
      return { ...state, searchCar: action.payload };
    default:
      return state;
  }
};

export default CarsReducer;
