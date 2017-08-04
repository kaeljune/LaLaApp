import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      left: new Animated.Value(-1)
    };
  } 

  componentDidMount() {
    Animated.timing(
      this.state.left, {
        toValue: this.state.value ? 14 : -1,
        duration: 0
      }
    ).start();
  }

  hanldePress = async () => {
    await this.setState({
      value: !this.state.value
    });

    await this.runAnimated();
  }

  runAnimated = () => {
    Animated.spring(
      this.state.left, {
        toValue: this.state.value ? 14 : -1,
        bounciness: 0
      }
    ).start();
  }

  render() {
    const { color, text, reverse, width, height, styleText } = this.props;
    const { value, left } = this.state;

    const container = reverse ?
      [styles.container, { flexDirection: 'row-reverse' }] :
      [styles.container, { flexDirection: 'row' }];

    const styleSwitchProp = [styles.switch, { width, height, borderRadius: height, borderColor: color }];

    const styleSwitch = value ?
      [styleSwitchProp, { backgroundColor: color }] :
      [styleSwitchProp, { backgroundColor: '#fff' }];

    const cirle = [styles.cirle, { width: height, height, borderRadius: height, borderColor: color, left }];

    return (
      <TouchableOpacity
        style={container}
        onPress={this.hanldePress}
        activeOpacity={1}
      >
        <View style={{ flex: 1 }}>
          <Text style={styleText}>{text}</Text>
        </View>
        <View style={styleSwitch}>
          <Animated.View style={cirle}>
            {value ?
              (<Icon name="check" color={color} size={20} />) :
              (<Icon name="clear" color={color} size={20} />)
            }
          </Animated.View>
        </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  switch: {
    borderWidth: 1
  },
  cirle: {
    position: 'absolute',
    top: -1,
    backgroundColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Switch;
