import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Animated } from 'react-native';
import { Provider } from 'react-redux';

import './config/firebase-config';
import store from './store';
import AppWithNavigationState from './navigators/AppNavigators';

class App extends Component {
  constructor() {
    super();
    //Hide warning "Setting a time on android simulator.."
    console.disableYellowBox = true;
    console.ignoredYellowBox = [
        'Setting a timer'
    ];
  }

  render() {
    const flipLeft = (index, position) => {
      const inputRange = [index - 1, index, index + 1];
      const scaleX = position.interpolate({
        inputRange,
        outputRange: ([1000, 500, 0]),
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
        outputRange: ([1000, 500, 0]),
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

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar hidden />
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
});

Expo.registerRootComponent(App);
