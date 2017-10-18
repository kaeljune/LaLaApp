//import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

import {
  ACCOUNT_FETCH_SUCCESS,
  ACCOUNT_FETCH_FAIL,
  EDIT
} from './types';

export const accountFetch = () => async (dispatch) => {
  try {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`/users/${user.uid}`)
          .on('value', snapshot => dispatch(accountFetchSuccess(snapshot.val())));
            // accountFetchSuccess(dispatch, snapshot.val());
      } else {
        dispatch(accountFetchFail());
        // accountFetchFail(dispatch);
      }
    });
  } catch (error) {
    dispatch(accountFetchFail());
    // accountFetchFail(dispatch);
    //emailLoginFail(dispatch);
  }
};

const accountFetchFail = () => ({
  type: ACCOUNT_FETCH_FAIL
});

const accountFetchSuccess = (user) => ({
    type: ACCOUNT_FETCH_SUCCESS,
    payload: user
});


// edit profile action

export const handleUpdateProfle = ({ name, email, phone }) => async dispatch => {
  const user = firebase.auth().currentUser;

  await user.updateProfile({
      displayName: name,
      phoneNumber: phone
    });

  await user.updateEmail(email);

  // console.log('action', { name, phone })

  firebase.database().ref(`users/${user.uid}`)
    .update({ name, phone, email }, () => {
      firebase.database().ref(`/users/${user.uid}`)
      .on('value', snapshot => dispatch(accountFetchSuccess(snapshot.val())));
    });
};
