import { combineReducers } from 'redux';
import  userSignupReducer   from './User/userRegisterReducer.js';
import userReducer from './User/userReducer';

const rootReducer = combineReducers({
  
    user: userReducer,
    signup: userSignupReducer
  });
  
  export default rootReducer;
  