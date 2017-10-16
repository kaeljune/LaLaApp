import React, { Component } from 'react';
import { Animated } from 'react-native';

class HocAnimation extends Component {
  state = {
    yTranslate: new Animated.Value(50)
  }

  componentDidMount() {
    Animated.timing(this.state.yTranslate, {
      toValue: 0,
      duration: this.props.duration  
    }).start();
  }
  
  render() {
    return (
      <Animated.View style={{ transform: [{ translateY: this.state.yTranslate }] }}>
        { this.props.children }    
      </Animated.View>
    );
  }
}

export default HocAnimation;
