
// type constants
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER,
} from 'Bread_Crumbs/src/controllers/actions/types';

const INIT_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  // currentScreen: '',
};

const Auth = (state = INIT_STATE, action) => {
  let result;

  switch (action.type) {
    case EMAIL_CHANGED:
      result = { ...state, email: action.payload };
      break;

    case PASSWORD_CHANGED:
      result = { ...state, password: action.payload };
      break;

    case LOGIN_USER:
      result = { ...state, user: action.payload, loading: true, error: '' };
      break;

    case LOGIN_SUCCESS:
      result = { ...state, user: action.payload, error: '', password: '', loading: false };
      break;

    case LOGIN_FAIL:
      result = { ...state, error: 'Email and password didn\'t match', password: '', loading: false };
      break;

    default:
      result = state;
  }

  return result;
};

export { Auth };
