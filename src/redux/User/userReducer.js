import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REDIRECT,
  LOGOUT_REQUEST,
} from './userTypesActions';
import { APP_LOGIN_TOKEN, APP_LOGIN_USER } from 'common/utils/constants';

const initialState = {
  loading: false,
  loggedIn: localStorage?.getItem(APP_LOGIN_TOKEN) !== '',
  user: '',
  token: localStorage.getItem(APP_LOGIN_TOKEN),
  username: localStorage.getItem(APP_LOGIN_USER) || '',
  error: '',
  redirectTo: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        loggedIn: false,
        token: '',
        username: '',
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        token: action.payload.token,
        username: action.payload.username,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: '',
        error: action.payload,
      };
    case LOGIN_REDIRECT:
      return {
        ...state,
        redirectTo: '/services',
      };
    default:
      return state;
  }
};

export default userReducer;
