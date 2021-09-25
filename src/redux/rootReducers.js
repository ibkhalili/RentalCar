import { combineReducers } from 'redux';
import userSignupReducer from './User/userRegisterReducer.js';
import userReducer from './User/userReducer';
import CarsReducer from './Cars/carsReducer.js';
import adminReducer from 'redux/Administration/adminReducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  user: userReducer,
  signup: userSignupReducer,
  cars: CarsReducer,
});

export default rootReducer;
