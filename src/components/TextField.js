import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR } from '../config/config';

class TextField extends Component {
  state = {
    isShowPass: false
  }

  togglePass = () => {
    this.setState(prevState => ({
      isShowPass: !prevState.isShowPass
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.label ? <Text style={styles.labelStyle}>{this.props.label}</Text> : null}
        <View style={styles.inputWrap}>
          <TextInput
            secureTextEntry={this.props.secureTextEntry && !this.state.isShowPass}
            style={{ height: 40 }}
            placeholder={this.props.placeholder}
            placeholderTextColor={COLOR.placeholderTextColor}
            underlineColorAndroid="transparent"
            tintColor={'#313131'}
            selectionColor={'#777'}
          />

          {this.props.secureTextEntry && (<Icon 
            size={20}
            color={this.state.isShowPass ? COLOR.primary : '#ddd'}
            name="visibility"
            containerStyle={{ position: 'absolute', right: 0, height: 40 }}
            onPress={this.togglePass}
          />)}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  inputWrap: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  labelStyle: {
    fontWeight: '300',
    color: COLOR.primaryFont
  }
});

export default TextField;
