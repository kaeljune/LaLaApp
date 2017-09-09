import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

function Btn(props) {
  return (
    <View style={props.containerStyle ? props.container : styles.wrapBtn}>
      <Button
        raise
        icon={props.icon ? props.icon : null}
        title={props.title}
        backgroundColor={props.bgColor}
        fontWeight="600"
        buttonStyle={[styles.btnStyle, props.style]}
        onPress={props.onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnStyle: {
    // minWidth: 150,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: '500'
  }
});

export default Btn;
