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
        {this.props.label && <Text style={this.props.labelStyle ? [styles.labelStyle, this.props.labelStyle] : styles.labelStyle}>{this.props.label}</Text>}
        <View style={styles.inputWrap}>
          <TextInput
            value={this.props.value}
            secureTextEntry={this.props.secureTextEntry && !this.state.isShowPass}
            style={{ paddingBottom: 10, lineHeight: 25, fontSize: 16 }}
            placeholder={this.props.placeholder}
            placeholderTextColor={COLOR.placeholderTextColor}
            underlineColorAndroid="transparent"
            tintColor={'#313131'}
            selectionColor={'#777'}
            onChangeText={this.props.onChangeText}
            multiline={this.props.multiline}
            numberOfLines={this.props.numberOfLines && 4}
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
    borderBottomWidth: 1,
  },
  labelStyle: {
    fontWeight: '300',
    color: COLOR.primaryFont
  }
});

export default TextField;
