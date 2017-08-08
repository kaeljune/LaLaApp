import { 
    ACCOUNT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  account: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACCOUNT_FETCH_SUCCESS:
            return { account: action.payload };
        default:
            return state;
    }
}
