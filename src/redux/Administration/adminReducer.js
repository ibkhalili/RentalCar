import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from 'redux/Administration/constants';

const initialState = {
  users: [],
  isLoading: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case GET_USERS_FAILURE:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
