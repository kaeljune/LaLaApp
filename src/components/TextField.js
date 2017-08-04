import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLOR } from '../config/config';

<<<<<<< HEAD

const TextField = (props) => (
    <View style={{ marginBottom: 15 }}>
        {props.label ? (
            <Text style={styles.labelStyle}>{props.label}</Text>
        ) : (
            null
        )}
        <TextInput 
            {...props}
            style={{ 
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                paddingVertical: 5,
                height: 35,
            }}
            placeholderTextColor='#A8A8A8'
            underlineColorAndroid="transparent"
=======
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
>>>>>>> 02523b172bdb9ba43c15abe4e39a5771e34cfa24
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
