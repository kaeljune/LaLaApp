import React, { Component } from 'react';
import { View, Text, 
    StyleSheet, KeyboardAvoidingView, ScrollView, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import {
    emailLogin, emailChanged, passwordChanged,
    phoneChanged, nameChanged,
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
        headerTintColor: '#313131',
        headerLeft: <Icon
            name='chevron-left'
            color={COLOR.primary}
            size={24}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />,
        headerTitleStyle,
        headerStyle,
    })
    state = {
        userData: null,
    };
    async componentWillMount() {
        const userData = await AsyncStorage.getItem('@userLogin');
        if (userData) {
            this.setState({ userData });
            this.props.navigation.navigate('isSignedIn');
        } else {
            this.setState({ userData: false });
        }
    }
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }
    onPhoneChange = (text) => {
        this.props.phoneChanged(text);
    }
    onNameChange = (text) => {
        this.props.nameChanged(text);
    }
    onTerms = () => {
        this.props.navigation.navigate('term');
    }
    onSignIn = () => {
        this.props.navigation.navigate('signin');
    }
    onButtonPress = async () => {
        const { email, password, phone, name } = this.props;
        await this.props.emailLogin({ email, password, phone, name });
        this.props.navigation.navigate('profile');
    }
    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Btn 
                title="SIGN IN"
                bgColor="#11b8ab"
                onPress={this.onButtonPress}
            />
        );
    }
    
    render() {
        const { containerStyle } = styles;
        return (
            <ScrollView contentContainerStyle={containerStyle}>
                <KeyboardAvoidingView behavior={'padding'}>
                    <View style={{ }}>
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
                        </View>

                        <LinkTerm onTerms={this.props.onTerms} />

                        <View style={{ alignItems: 'center' }}>
                            {this.renderButton()}
                            <Text style={{ marginVertical: 15 }}>Or sign in with</Text>
                            <Btn 
                                title="FACEBOOK"
                                bgColor="#3B5998"
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
        height: HEIGHT_SCREEN,
        padding: 20
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, phone, name } = auth;
    return { email, password, error, loading, phone, name };
};

export default connect(mapStateToProps,
    { emailLogin, emailChanged, passwordChanged, phoneChanged, nameChanged })(SignupScreen);
