import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Animated, StyleSheet } from 'react-native';

import { COLOR } from '../config/config';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(0.5) 
    };
  }

  componentWillReceiveProps(nextProps) {
    Animated.spring(
      this.state.scale, {
        toValue: nextProps.isActive ? 1 : 0.5
      }
    ).start();
  }

  onPress = () => {
    this.props.onActive(this.props.id);
  }

  render() {
    const { reverse, text, isActive } = this.props;
    const conatainerStyle = reverse ? [styles.container, { flexDirection: 'row-reverse' }] : [styles.container, { flexDirection: 'row' }];
    const styleActive = isActive ? { borderColor: COLOR.primary } : { borderColor: '#ddd' };
    const bgActive = isActive ? { backgroundColor: COLOR.primary } : { backgroundColor: '#fff' };
    const wrapText = reverse ? { marginRight: 15 } : { marginLeft: 15 };

    const styleScale = {
      transform: [
        { scale: this.state.scale }
      ]
    };

    return (
      <TouchableOpacity
        style={[conatainerStyle, this.props.containerStyle]}
        onPress={this.onPress}
        activeOpacity={1}
      >
        <View 
          style={[styleActive, { height: 25, width: 25, borderRadius: 20, borderWidth: 1 }]}
        >
          <Animated.View style={[bgActive, styleScale, { height: 19, width: 19, borderRadius: 10, marginTop: 2, marginLeft: 2, }]} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[wrapText, { lineHeight: 25 }]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center'
  }
});

export default Radio;
