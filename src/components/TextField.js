import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLOR } from '../config/config';

function TextField(props) {
  return (
    <View style={styles.container}>
      {props.label ? <Text style={styles.labelStyle}>{props.label}</Text> : null}
      <View style={styles.inputWrap}>
        <TextInput
          {...props}
          style={{ height: 50 }}
          placeholderTextColor={COLOR.placeholderTextColor}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  inputWrap: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  labelStyle: {
    fontWeight: '300',
    color: COLOR.primaryFont
  }
});

export default TextField;
