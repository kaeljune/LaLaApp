import React, { Component } from 'react';
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

import { Spinner } from '../../../components/Spinner';

import { WIDTH_SCREEN, COLOR } from '../../../config/config';

import TextField from '../../../components/TextField';
import ForgotLink from './ForgotLink';
import Btn from '../../../components/Btn';

class SigninForm extends Component {
    state = { email: '', password: '' };

    onEmailChange = (text) => {
        this.props.signinEmailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.signinPasswordChanged(text);
    }

    onButtonPress = async () => {
        this.props.onButtonPress();
    }
    
    onForgot = () => {
        this.props.onForgot();
    }
    renderButton = () => {
        if (this.props.loadingSF) {
            return <Spinner size="large" />;
        }
        return (
            <Btn 
                title="SIGN IN"
                bgColor={COLOR.primary}
                onPress={this.onButtonPress}
                style={{ width: 150 }}
            />
        );
    }
    render() {
        const { section } = styles;
        return (
            <View>
                <View style={section}>
                    <TextField 
                        label="EMAIL"
                        value={this.props.emailSF}
                        placeholder="What's your email?"
                        keyboardType='email-address'
                        onChangeText={this.onEmailChange}
                    />

                    <TextField 
                        label="PASSWORD"
                        secureTextEntry
                        placeholder="What’s your password"
                        secureTextEntry
                        keyboardType='default'
                        value={this.props.passwordSF}
                        onChangeText={this.onPasswordChange}
                    />
                </View>

                <ForgotLink onForgot={this.onForgot} />
                {this.renderButton()}
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
