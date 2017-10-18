import { ACCOUNT_FETCH_SUCCESS, ACCOUNT_FETCH_FAIL } from '../actions/types';

export const navLogin = () => (dispatch) => {
    dispatch({ type: ACCOUNT_FETCH_SUCCESS });
};
export const navLogout = () => (dispatch) => {
    dispatch({ type: ACCOUNT_FETCH_FAIL });
};
