import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Animated } from 'react-native';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import firebase from 'firebase';
import { StackNavigator, TabNavigator } from 'react-navigation';

import store from './store';

import DefaultScreen from './screens/DefaultScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/MainScreen';
import SigninScreen from './screens/AuthScreen/SigninScreen';
import SignupScreen from './screens/AuthScreen/SignupScreen';
import ProfileScreen from './screens/AuthScreen/ProfileScreen';
import ForgotScreen from './screens/AuthScreen/ForgotScreen';
import GiftSelection from './screens/GiftSelection';
import AfterRequest from './screens/AfterRequest';
import FindAGift from './screens/FindAGift';
import Checkout from './screens/Checkout';
import WriteANote from './screens/WriteANote';
import DeliveryBlank from './screens/DeliveryBlank';
import TermScreen from './screens/TermScreen';
import Delivery from './screens/Delivery';
import Payment from './screens/Payment';
import SetLocation from './screens/FindGiftScreen/SetLocation';
import SetFormRequest from './screens/FindGiftScreen/SetFormRequest';

injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyD3943z3AHYq6svO850thQNjTgdwf-4AqI',
      authDomain: 'airlala-7b1b2.firebaseapp.com',
      databaseURL: 'https://airlala-7b1b2.firebaseio.com',
      projectId: 'airlala-7b1b2',
      storageBucket: 'airlala-7b1b2.appspot.com',
      messagingSenderId: '1002936018143'
    };
    firebase.initializeApp(config);
  }
  render() {
    const flipLeft = (index, position) => {
      const inputRange = [index - 1, index, index + 1];
      const scaleX = position.interpolate({
        inputRange,
        outputRange: ([1000, 0, 0]),
      });
      return {
        transform: [
          { translateX: scaleX }
        ]
      };
    };
    const flipTop = (index, position) => {
      const inputRange = [index - 1, index, index + 1];
      const scaleY = position.interpolate({
        inputRange,
        outputRange: ([1000, 0, 0]),
      });
      return {
        transform: [
          { translateY: scaleY }
        ]
      };
    };
    const MyTransitionSpec = ({
      duration: 400,
      //easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
      timing: Animated.timing,
    });
    const TransitionConfiguration = () => ({
      transitionSpec: MyTransitionSpec,
      screenInterpolator: (sceneProps) => {
        const { position, scene } = sceneProps;
        const { index, route } = scene;
        const params = route.params || {};
        const transition = params.transition || 'default';

        return {
          flipTop: flipTop(index, position),
          default: flipLeft(index, position),
        }[transition];
      }
    });
    const MainNavigator = TabNavigator({
      isSignedOut: {
        screen: StackNavigator({
          default: { screen: DefaultScreen },
          signup: { screen: SignupScreen },
          forgot: { screen: ForgotScreen },
          welcome: { screen: WelcomeScreen },
          delivery: { screen: Delivery },   
          signin: { screen: SigninScreen },
          term: { screen: TermScreen },
        })
      },
      isSignedIn: {
        screen: TabNavigator({
          profile: {
            screen: StackNavigator({
              profile: { screen: ProfileScreen },
              term: { screen: TermScreen },
            })
          },
          main: {
            screen: StackNavigator({
              mainGift: { screen: MainScreen },
              setFormRequest: { screen: SetFormRequest },
              setLocation: { screen: SetLocation },
              giftselection: { screen: GiftSelection },
              checkout: { screen: Checkout },
            })
          },


          delivery: { screen: Delivery },

          afterrequest: { screen: AfterRequest },
          payment: { screen: Payment },
          deliveryblank: { screen: DeliveryBlank },
          findagift: { screen: FindAGift },
          writeanote: { screen: WriteANote },
        },
          {
            navigationOptions: {
              tabBarVisible: false
            },
          }
        )
      }
    }, {
        navigationOptions: {
          tabBarVisible: false
        },
        headerMode: 'screen',
        transitionConfig: TransitionConfiguration,
      });
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar hidden />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
