import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './userTypesActions';
import { APP_LOGIN_TOKEN, APP_LOGIN_USER } from 'common/utils/constants';

const initialState = {
  loading: false,
  login: false,
  user: {},
  token: localStorage.getItem(APP_LOGIN_TOKEN),
  username: '' || localStorage.getItem(APP_LOGIN_USER),
  error: '',
};

const userREGISTERReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        user: action.payload,
        token: localStorage.setItem(APP_LOGIN_TOKEN, action.payload.token),
        username: localStorage.setItem(APP_LOGIN_USER, action.payload.username),
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userREGISTERReducer;
