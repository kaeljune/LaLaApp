import { ACCOUNT_FETCH_SUCCESS } from '../actions/types';

export const navLogin = () => (dispatch) => {
    dispatch({ type: ACCOUNT_FETCH_SUCCESS });
};
