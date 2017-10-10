import React, { Component } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Alert,
  AsyncStorage,
  Platform,
  Easing,
} from 'react-native';
// import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  accountFetch, emailSignin, signinEmailChanged, signinPasswordChanged,
} from '../../../actions';

import {
  COLOR, WIDTH_SCREEN,
  headerTitleStyle, headerStyle,
} from '../../../config/config';

import Spinner from '../../../components/Spinner';
import Brand from './Brand';
import SigninForm from './SigninForm';
import SignupLink from './SignupLink';

class SigninScreen extends Component {
  static navigationOptions = () => ({
    title: 'Sign in',
    headerBackTitle: null,
    headerTintColor: COLOR.primary,
    headerTitleStyle,
    headerStyle,
  })

  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      translateY: new Animated.Value(100),
      opacity: new Animated.Value(0)
    };

  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.translateY, {
        toValue: 0,
        useNativeDriver: Platform.OS === 'android'
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 200,
        easing: Easing.circle,
        useNativeDriver: Platform.OS === 'android'
      })
    ]).start();
  }

  async onAuthComplete(props) {
    await props.accountFetch();
    const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
    if (JSON.parse(fetchAcc).isLogin) {
        // this.props.navigation.navigate('isSignedIn', { });
        console.log('ton tai');
    }
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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            doNotForceDismissKeyboardWhenLayoutChanges
            style={{
              backgroundColor: '#f8f8f8',
              flex: 1,
              opacity: this.props.loadingSF ? 0.2 : 1
            }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.ContainerStyle}
            scrollEnabled
            animated
          >
            <Brand />
            <Animated.View style={{ alignItems: 'center', transform: [{ translateY: this.state.translateY }], opacity: this.state.opacity }}>
              <SigninForm onButtonPress={this.onButtonPress} onForgot={this.onForgot} />
              <SignupLink onSignUp={this.onSignUp} />
            </Animated.View>
          </KeyboardAwareScrollView>
        </View>
        {
          this.props.loadingSF &&
          <View
            style={{
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff'
            }}
          >
            <Spinner />
          </View>
        }
      </View>
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
