import { combineReducers } from 'redux';
import  userSignupReducer   from './User/userRegisterReducer.js';
import userReducer from './User/userReducer';
import CarsReducer from './Cars/carsReducer.js';

const rootReducer = combineReducers({
  
    user: userReducer,
    signup: userSignupReducer,
    cars: CarsReducer
  });
  
  export default rootReducer;
  