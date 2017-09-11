import React, { Component } from 'react';
import { View, Text, 
    StyleSheet, KeyboardAvoidingView, ScrollView, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
    emailSignup, signupEmailChanged, signupPasswordChanged,
    signupConfirmPasswordChanged, signinNameChanged, signinPhoneChanged,
} from '../../../actions';

import { Spinner } from '../../../components/Spinner';
import {
    HEIGHT_SCREEN, COLOR,
    headerStyle, headerTitleStyle
} from '../../../config/config';
import SigninLink from './SigninLink';
import LinkTerm from './LinkTerm';
import TextField from '../../../components/TextField';
import Btn from '../../../components/Btn';

class SignupScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign up',
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
    onEmailChange = (text) => {
        this.props.signupEmailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.signupPasswordChanged(text);
    }
    onConfirmPasswordChange = (text) => {
        this.props.signupConfirmPasswordChanged(text);
    }
    
    onPhoneChange = (text) => {
        this.props.signinPhoneChanged(text);
    }
    onNameChange = (text) => {
        this.props.signinNameChanged(text);
    }
    onTerms = () => {
        this.props.navigation.navigate('term');
    }
    onSignIn = () => {
        this.props.navigation.navigate('signin');
    }
    onButtonPress = async () => {
        const { email, password, phone, name } = this.props; 
        try {
            await this.props.emailSignup({ email, password, phone, name });
            if (this.props.error) {
                Alert.alert(
                    this.props.error.name,
                    this.props.error.message,
                    [
                        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                        { text: 'OK', onPress: () => {} },
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
    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Btn 
                title="SIGN UP"
                bgColor={COLOR.primary}
                style={{ width: 150 }}
                onPress={this.onButtonPress}
            />
        );
    }
    
    render() {
        const { containerStyle } = styles;
        return (
            <ScrollView contentContainerStyle={{ padding: 20 }} style={containerStyle}>
                <KeyboardAvoidingView behavior={'padding'}>
                    <View>
                        <View>
                            <TextField 
                                label="FULL NAME"
                                value={this.props.name}
                                placeholder="What's your name?"
                                onChangeText={this.onNameChange}
                            />
                            <TextField 
                                label="EMAIL"
                                value={this.props.email}
                                placeholder="What's your email?"
                                keyboardType='email-address'
                                onChangeText={this.onEmailChange}
                            />
                            <TextField 
                                label="PHONE NUMBER"
                                value={this.props.phone}
                                placeholder="What’s your mobile number"
                                keyboardType='numeric'
                                onChangeText={this.onPhoneChange}
                            />
                            <TextField 
                                label="PASSWORD"
                                secureTextEntry
                                placeholder="What’s your password"
                                keyboardType='default'
                                value={this.props.password}
                                onChangeText={this.onPasswordChange}
                            />

                            <TextField 
                                label="CONFIRM PASSWORD"
                                secureTextEntry
                                placeholder="Confirm your password"
                                keyboardType='default'
                                value={this.props.password}
                                onChangeText={this.onConfirmPasswordChange}
                            />
                        </View>

                        <LinkTerm onTerms={this.props.onTerms} />

                        <View style={{ alignItems: 'center' }}>
                            {this.renderButton()}
                            <Text style={{ marginVertical: 15 }}>Or sign in with</Text>
                            <Btn 
                                title="FACEBOOK"
                                bgColor="#3B5998"
                                style={{ width: 150 }}
                                onPress={() => { Alert('loginface'); }}
                            />
                            <SigninLink onSignIn={this.onSignIn} />
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    }
});

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
        signinPhoneChanged, })(SignupScreen);
