import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Animated } from 'react-native';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import DefaultScreen from './screens/DefaultScreen';
import MainScreen from './screens/MainScreen';
import SigninScreen from './screens/AuthScreen/SignInScreen';
import SignupScreen from './screens/AuthScreen/SignUpScreen';
import ProfileScreen from './screens/AuthScreen/ProfileScreen';
import GiftSelection from './screens/GiftSelection';


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
    const MainNavigator = StackNavigator({

      welcome: { screen: WelcomeScreen },
      giftselection: { screen: GiftSelection },
      default: { screen: DefaultScreen },
      signin: { screen: SigninScreen },
      signup: { screen: SignupScreen },
      profile: { screen: ProfileScreen },
      main: { screen: MainScreen },
    }, {
        headerMode: 'screen',
        transitionConfig: TransitionConfiguration
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
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
