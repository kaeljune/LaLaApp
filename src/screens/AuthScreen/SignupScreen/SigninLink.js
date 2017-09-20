import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import * as config from '../../../config/config';

const SigninLink = (props) => {
  const { wrapSigninLink, textStyle } = styles;
  return (
    <View style={wrapSigninLink}>
      <TouchableOpacity onPress={props.onSignIn}>
        <Text style={textStyle}>
          <Text style={{ color: '#858585' }}>Already have an account?</Text>
          <Text
            style={{ fontWeight: '600', color: config.COLOR.primary }}

          >&nbsp;Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapSigninLink: {
    paddingVertical: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 15,
  }
});

export default SigninLink;
