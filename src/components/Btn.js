import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Btn(props) {
  return (
    <View style={props.containerStyle ? props.containerStyle : styles.wrapBtn}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.btnStyle, props.style, { backgroundColor: props.bgColor }]}>
          <Text style={props.titleStyle ? props.titleStyle : styles.btnText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapBtn: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnStyle: {
    // minWidth: 150,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: '500'
  }
});

export default Btn;
