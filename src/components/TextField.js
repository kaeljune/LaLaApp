import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
<<<<<<< HEAD
            style={[{ paddingBottom: 10, lineHeight: 25, fontSize: 16, height: 40 }, this.props.style]}
=======
            style={[{ height: 40, lineHeight: 25, fontSize: 16 }, this.props.style]}
>>>>>>> 043710a84f99f0935cf682515327a77a12da56d1
            placeholder={this.props.placeholder}
            placeholderTextColor={COLOR.placeholderTextColor}
            underlineColorAndroid="transparent"
            tintColor={'#313131'}
            selectionColor={'#777'}
            onChangeText={this.props.onChangeText}
            multiline={this.props.multiline}
            numberOfLines={this.props.numberOfLines && 4}
          />

          {this.props.secureTextEntry && (
            <View
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                height: 40,
                width: 40,
              }}
            >
              <TouchableOpacity onPress={this.togglePass}>
                <View style={{
                  height: 40, width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'red'
                }}>
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
