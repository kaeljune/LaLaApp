import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR } from '../config/config';

class TextField extends Component {
  state = {
    isShowPass: false
  }

  render() {
    const { label, labelStyle, value, editable,
      secureTextEntry, style, placeholder, onChangeText, multiline, numberOfLines, keyboardType, returnKeyType } = this.props;
    return (
      <View style={styles.container}>
        {label && <Text style={labelStyle ? [styles.labelStyle, labelStyle] : styles.labelStyle}>{this.props.label}</Text>}
        <View style={styles.inputWrap}>
          <TextInput
            value={value}
            editable={editable}
            secureTextEntry={secureTextEntry && !this.state.isShowPass}
            style={[{ height: 40, lineHeight: 25, fontSize: 16 }, style]}
            placeholder={placeholder}
            placeholderTextColor={COLOR.placeholderTextColor}
            underlineColorAndroid="transparent"
            tintColor={'#313131'}
            selectionColor={'#777'}
            onChangeText={onChangeText}
            multiline={multiline}
            numberOfLines={numberOfLines && 4}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
          />

          {secureTextEntry && (
            <View
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                height: 40,
                width: 40,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState(prevState => ({
                    isShowPass: !prevState.isShowPass
                  }));
                }}
              >
                <View
                  style={{
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    size={20}
                    color={this.state.isShowPass ? COLOR.primary : '#ddd'}
                    name="visibility"
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
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
    position: 'relative'
  },
  labelStyle: {
    fontWeight: '300',
    color: COLOR.primaryFont,
    marginBottom: 5
  }
});

export default TextField;
