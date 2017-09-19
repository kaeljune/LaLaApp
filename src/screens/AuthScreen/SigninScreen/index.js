import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Alert, AsyncStorage } from 'react-native';

import { connect } from 'react-redux';
import {
  accountFetch, emailSignin, signinEmailChanged, signinPasswordChanged,
} from '../../../actions';

import {
  COLOR, WIDTH_SCREEN, HEIGHT_SCREEN,
  headerTitleStyle, headerStyle
} from '../../../config/config';

// import WrapAnimation from '../../../components/hoc/WrapAnimation';

import Brand from './Brand';
import SigninForm from './SigninForm';
import SignupLink from './SignupLink';

class SigninScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign in',
    headerTintColor: COLOR.primary,
    // headerLeft: <Icon
    //     name='chevron-left'
    //     color={COLOR.primary}
    //     onPress={() => navigation.goBack()}
    // />,
    headerTitleStyle,
    headerStyle,
  })
  state = {
    userData: null,
  };
  async onAuthComplete(props) {
    // await props.accountFetch();
    // const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
    // if (JSON.parse(fetchAcc).isLogin) {
    //     // this.props.navigation.navigate('isSignedIn', { });
    //     console.log('ton tai');
    // }
  }
  onSignUp = () => {
    this.props.navigation.navigate('signup');
  }
  onForgot = () => {
    this.props.navigation.navigate('forgot');
  }
  onButtonPress = async () => {
    const { emailSF, passwordSF } = this.props;
    try {
      await this.props.emailSignin({ emailSF, passwordSF });
      if (this.props.errorSF) {
        Alert.alert(
          this.props.errorSF.name,
          this.props.errorSF.message,
          [
            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
            { text: 'OK', onPress: () => { } },
          ],
          { cancelable: false }
        );
      } else {
        this.onAuthComplete(this.props);
      }
    } catch (err) {
      //
    }
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8' }} contentContainerStyle={styles.ContainerStyle}>
        <Brand />
        <View style={{ alignItems: 'center', }}>
          <SigninForm onButtonPress={this.onButtonPress} onForgot={this.onForgot} />
          <SignupLink onSignUp={this.onSignUp} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  ContainerStyle: {
    paddingBottom: 30
  },
  section: {
    width: WIDTH_SCREEN - 40
  }
});

const mapStateToProps = ({ signinState }) => {
  const { emailSF, passwordSF, errorSF, loadingSF, user } = signinState;
  return { emailSF, passwordSF, errorSF, loadingSF, user };
};

export default connect(mapStateToProps,
  { emailSignin, accountFetch, signinEmailChanged, signinPasswordChanged })(SigninScreen);
