import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigators';
import {
  ACCOUNT_FETCH_SUCCESS,
  ACCOUNT_FETCH_FAIL,
  SIGNOUT,
  REQUEST_GIFT_SUCCESS
} from '../actions/types.js';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('isSignedIn');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('isLoading');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case REQUEST_GIFT_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'isSignedIn' }),
        state
      );
      break;
    case ACCOUNT_FETCH_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'isSignedIn',
          //params: {},
          //action: NavigationActions.navigate({ routeName: 'mainGift', params: {} })
        }),
        state
      );
      break;
    case ACCOUNT_FETCH_FAIL:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'isSignedOut' }),
        state
      );
      break;
    case SIGNOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'isSignedOut' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
