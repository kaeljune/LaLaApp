import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigators';
import {  
  ACCOUNT_FETCH_SUCCESS,
  ACCOUNT_FETCH_FAIL
} from '../actions/types.js';
// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('isSignedIn');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('isLoading');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);


export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case ACCOUNT_FETCH_SUCCESS:
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ 
        routeName: 'isSignedIn',
        params: {},
        action: NavigationActions.navigate({ routeName: 'mainGift', params: { name: 'foo' } }) 
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
    case 'Logout':
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
