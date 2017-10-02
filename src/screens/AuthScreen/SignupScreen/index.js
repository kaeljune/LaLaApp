import React, { Component } from 'react';
import {
  View, Text,
  // StyleSheet,
  Animated,
  Platform,
  UIManager,
  LayoutAnimation,
  Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import {
  emailSignup, signupEmailChanged, signupPasswordChanged,
  signupConfirmPasswordChanged, signinNameChanged, signinPhoneChanged,
} from '../../../actions';
import {
  COLOR,
  headerStyle,
  headerTitleStyle,
  CustomLayoutSpring
} from '../../../config/config';

import Spinner from '../../../components/Spinner';
import SigninLink from './SigninLink';
import LinkTerm from './LinkTerm';
import TextField from '../../../components/TextField';
import Btn from '../../../components/Btn';

class SignupScreen extends Component {
  static navigationOptions = () => ({
    title: 'Sign up',
    headerTintColor: COLOR.primary,
    headerBackTitle: null,
    headerTitleStyle,
    headerStyle,
  })

  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      translateY: new Animated.Value(200)
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  // async componentWillMount() {
  //     //await AsyncStorage.removeItem('@userLogin');
  //     const userData = await AsyncStorage.getItem('@userLogin');
  //     if (userData) {
  //         this.setState({ userData });
  //         this.props.navigation.navigate('isSignedIn');
  //     } else {
  //         this.setState({ userData: false });
  //     }
  // }

  componentDidMount() {
    Animated.spring(this.state.translateY, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  }

  // onEmailChange = (text) => this.props.signupEmailChanged(text);

  // onPasswordChange = (text) => this.props.signupPasswordChanged(text);

  // onConfirmPasswordChange = (text) => this.props.signupConfirmPasswordChanged(text);

  // onPhoneChange = (text) => this.props.signinPhoneChanged(text);

  // onNameChange = (text) => this.props.signinNameChanged(text);

  onButtonPress = async () => {
    const { email, password, phone, name } = this.props;

    LayoutAnimation.configureNext(CustomLayoutSpring);

    try {
      await this.props.emailSignup({ email, password, phone, name });
      if (this.props.error) {
        Alert.alert(
          this.props.error.name,
          this.props.error.message,
          [
            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
            { text: 'OK', onPress: () => { } },
          ],
          { cancelable: false }
        );
      } else {
        await this.props.navigation.navigate('profile');
      }
    } catch (err) {
      //
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          doNotForceDismissKeyboardWhenLayoutChanges
          style={{ backgroundColor: '#f8f8f8', flex: 1 }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ padding: 20}}
          scrollEnabled
          animated
        >
          <Animated.View style={{ transform: [{ translateY: this.state.translateY }] }}>
            <TextField
              label="USER NAME"
              value={this.props.name}
              placeholder="What's your name?"
              returnKeyType="next"
              onChangeText={(text) => this.props.signinNameChanged(text)}
            />
            <TextField
              label="EMAIL"
              value={this.props.email}
              placeholder="What's your email?"
              keyboardType="email-address"
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={(text) => this.props.signupEmailChanged(text)}
            />
            <TextField
              label="PHONE NUMBER"
              value={this.props.phone}
              placeholder="What’s your mobile number"
              keyboardType='numeric'
              returnKeyType="next"
              onChangeText={(text) => this.props.signinPhoneChanged(text)}
            />
            <TextField
              label="PASSWORD"
              secureTextEntry
              placeholder="What’s your password"
              keyboardType='default'
              returnKeyType="next"
              value={this.props.password}
              onChangeText={(text) => this.props.signupPasswordChanged(text)}
            />
          </Animated.View>

          <LinkTerm onTerms={() => this.props.navigation.navigate('term')} />

          <View style={{ alignItems: 'center' }}>
            <Btn
              title="SIGN UP"
              bgColor={COLOR.primary}
              style={{ width: 150 }}
              onPress={this.onButtonPress}
            />
            <Text style={{ marginVertical: 15 }}>Or sign in with</Text>
            <Btn
              title="FACEBOOK"
              bgColor="#3B5998"
              style={{ width: 150 }}
              onPress={() => { Alert('loginface'); }}
            />
            <SigninLink onSignIn={() => this.props.navigation.navigate('signin')} />
          </View>
        </KeyboardAwareScrollView>
        {
          this.props.loading &&
          <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Spinner />
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = ({ signupState }) => {
  const { email, password, error, loading, phone, name } = signupState;
  return { email, password, error, loading, phone, name };
};
export default connect(mapStateToProps,
  {
    emailSignup,
    signupEmailChanged,
    signupPasswordChanged,
    signupConfirmPasswordChanged,
    signinNameChanged,
    signinPhoneChanged,
  })(SignupScreen);
