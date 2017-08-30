import { ACCOUNT_FETCH_SUCCESS } from '../actions/types';

export const isLogin = () => (dispatch) => {
    dispatch({ type: ACCOUNT_FETCH_SUCCESS });
};
