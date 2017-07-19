import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import firebase from 'firebase';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  EMAIL_LOGIN,
  EMAIL_LOGIN_SUCCESS,
  EMAIL_LOGIN_FAIL,
  NAME_CHANGED,
  EMAIL_CHANGED,
  PHONE_CHANGED,
  PASSWORD_CHANGED
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');
export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
  });

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
  });
export const phoneChanged = (text) => ({
    type: PHONE_CHANGED,
    payload: text
  });
export const nameChanged = (text) => ({
    type: NAME_CHANGED,
    payload: text
  });
export const emailLogin = ({ name, email, phone, password }) => async dispatch => {
  await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => emailLoginSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => emailLoginSuccess(dispatch, user))
        .then(user => user.updateProfile({
          name,
          phone,
        }).then(() => {
          // Update successful.
        }, (error1) => {
          console.log(error1);
        })
        )
        .catch(() => emailLoginFail(dispatch));
    });
  dispatch({ type: EMAIL_LOGIN });
};
export const emailLoginFail = (dispatch) => {
  dispatch({ type: EMAIL_LOGIN_FAIL });
};

export const emailLoginSuccess = (dispatch, user) => {
  dispatch({
    type: EMAIL_LOGIN_SUCCESS,
    payload: user
  });
};
export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch an action saying FB login is done
    AsyncStorage.removeItem('fb_token');
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};
export const checkToken = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
};

const doFacebookLogin = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('1865702990351253', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

