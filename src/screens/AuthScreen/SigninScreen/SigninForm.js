import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

import {
  signinEmailChanged, signinPasswordChanged,
} from '../../../actions';
import { WIDTH_SCREEN, COLOR } from '../../../config/config';

import TextField from '../../../components/TextField';
import ForgotLink from './ForgotLink';
import Btn from '../../../components/Btn';

class SigninForm extends PureComponent {
  render() {
    const { section } = styles;
    return (
      <View>
        <View style={section}>
          <TextField
            label="EMAIL"
            value={this.props.emailSF}
            placeholder="What's your email?"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={(text) => this.props.signinEmailChanged(text)}
          />

          <TextField
            label="PASSWORD"
            placeholder="What’s your password"
            secureTextEntry
            returnKeyType="done"
            value={this.props.passwordSF}
            onChangeText={(text) => this.props.signinPasswordChanged(text)}
          />
        </View>

        <ForgotLink onForgot={() => this.props.onForgot()} />
        <Btn
          title="SIGN IN"
          bgColor={COLOR.primary}
          onPress={() => this.props.onButtonPress()}
          style={{ width: 150 }}
        />
        <Text style={{ marginVertical: 15, textAlign: 'center' }}>Or sign in with</Text>
        <Btn
          title="FACEBOOK"
          bgColor="#3B5998"
          style={{ width: 150 }}
          onPress={() => { Alert('loginface'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    width: WIDTH_SCREEN - 40
  }
});

const mapStateToProps = ({ signinState }) => {
  const { emailSF, passwordSF, errorSF, loadingSF } = signinState;
  return { emailSF, passwordSF, errorSF, loadingSF };
};

export default connect(mapStateToProps,
  { signinEmailChanged, signinPasswordChanged })(SigninForm);
