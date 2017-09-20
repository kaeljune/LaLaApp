import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';

// import HocLoading from '../../src/components/hoc/Loadding';

import DefaultScreen from '../screens/DefaultScreen';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/AuthScreen/SigninScreen';
import SignupScreen from '../screens/AuthScreen/SignupScreen';
import ProfileScreen from '../screens/AuthScreen/ProfileScreen';
import ForgotScreen from '../screens/AuthScreen/ForgotScreen';
import GiveAGift from '../screens/GiveAGift';
import GiftSelection from '../screens/GiftSelection';
import AfterRequest from '../screens/AfterRequest';
import FindAGift from '../screens/FindAGift';
import Checkout from '../screens/Checkout';
import WriteANote from '../screens/WriteANote';
import DeliveryBlank from '../screens/DeliveryBlank';
import TermScreen from '../screens/TermScreen';
import Delivery from '../screens/Delivery';
import Payment from '../screens/Payment';
import SplashScreen from '../screens/SplashScreen';

// add detail Gift
import DetailGift from '../screens/DetailGift';

//add address
import Address from '../screens/Address';

const isSignedOut = StackNavigator({
	default: { screen: DefaultScreen },
	signin: { screen: SigninScreen },
	signup: { screen: SignupScreen },
	welcome: { screen: WelcomeScreen },
	forgot: { screen: ForgotScreen },
});

const isProfile = StackNavigator({
	profile: { screen: ProfileScreen },
	term: { screen: TermScreen },
});

const isFindGift = StackNavigator({
	mainGift: { screen: MainScreen },
	address: { screen: Address },
	giftselection: { screen: GiftSelection },
	findagift: { screen: FindAGift },
	giveagift: { screen: GiveAGift },
	detailgift: { screen: DetailGift },
	checkout: { screen: Checkout },
	writeanote: { screen: WriteANote },
	deliveryblank: { screen: DeliveryBlank },
	delivery: { screen: Delivery },
	payment: { screen: Payment },
});

const isSignedIn = TabNavigator({
	isFindGift: { screen: isFindGift },
	isProfile: { screen: isProfile },
	afterrequest: { screen: AfterRequest },
},
	{
		navigationOptions: {
			tabBarVisible: false
		},
		swipeEnabled: false,
		animationEnabled: false,
		lazy: true,
	}
);
export const AppNavigator = TabNavigator({
	isLoading: { screen: SplashScreen },
	isSignedOut: { screen: isSignedOut },
	isSignedIn: { screen: isSignedIn }
},
	{
		navigationOptions: {
			tabBarVisible: false
		},
		headerMode: 'screen',
		swipeEnabled: false,
		animationEnabled: false,
		lazy: true,
	}
);

class AppWithNavigationState extends PureComponent {
	_addNavigationHelpers(navigation) {
    const original = addNavigationHelpers(navigation);
    let debounce;
    return {
      ...original,
      navigateWithDebounce: (routeName, params, action) => {
        const func = () => {
          clearTimeout(debounce);
          debounce = setTimeout(() => {
            navigation.dispatch(NavigationActions.navigate({
              routeName,
              params,
              action
            }));
          }, 200);
        };
        return func();
      }
    };
  }
	render() {
		const { dispatch, nav } = this.props;
		return (
			<AppNavigator
				navigation={
					this._addNavigationHelpers({
						dispatch,
						state: nav
					})
				}
			/>
		);
	}
}

// const AppWithNavigationState = ({ dispatch, nav }) => (
// 	<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// );

AppWithNavigationState.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
