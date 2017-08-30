import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';

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
    giveagift: { screen: GiveAGift }, 

    findagift: { screen: FindAGift },
    giftselection: { screen: GiftSelection },
    checkout: { screen: Checkout },
    writeanote: { screen: WriteANote },
    deliveryblank: { screen: DeliveryBlank },
    delivery: { screen: Delivery },
    payment: { screen: Payment },
});
const isSignedIn = TabNavigator({
    isProfile: { screen: isProfile },
    isFindGift: { screen: isFindGift },
    afterrequest: { screen: AfterRequest }, 
},
    {
    navigationOptions: {
      tabBarVisible: false
    },
    swipeEnabled: false,
    lazy: true,
    }
);
export const AppNavigator = TabNavigator({
    isSignedOut: { screen: isSignedOut },
    isSignedIn: { screen: isSignedIn }
},
    {
        navigationOptions: {
            tabBarVisible: false
        },
        headerMode: 'screen',
        swipeEnabled: false,
        lazy: true,
    }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
