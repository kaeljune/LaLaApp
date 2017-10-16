import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const Touch = (props) => {
  if (Platform.OS === 'android') {
    return (<TouchableNativeFeedback {...props}>
      { props.children }
    </TouchableNativeFeedback>);
  }
  return (
    <TouchableOpacity {...props}>
      { props.children }
    </TouchableOpacity>
  );
};

export default Touch;
