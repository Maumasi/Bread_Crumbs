
import firebase from 'firebase';

// type constants
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER,
} from 'Bread_Crumbs/src/controllers/actions/types';

// helper funcs
const logInFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};

const logInSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};


export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};


export const logInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => logInSuccess(dispatch, user))

      .catch((err) => {
        console.log(err);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => logInSuccess(dispatch, user))

          .catch(() => logInFail(dispatch));
      });
  };
};
