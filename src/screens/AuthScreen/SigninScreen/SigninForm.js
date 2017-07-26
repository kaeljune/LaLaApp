import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import GradientButton from '../../../components/GradientButton';
import { WIDTH_SCREEN } from '../../../config/config';

import TextField from '../../../components/TextField';
import ForgotLink from './ForgotLink';
import Btn from '../../../components/Btn';


class SigninForm extends Component {
    state = { email: '', password: '' };

    onForgot = () => {
        this.props.onForgot();
    }
    
    render() {
        const { section } = styles;
        return (
            <View >
                <View style={section}>
                    <TextField 
                        label="EMAIL"
                        value={this.state.email}
                        placeholder="What's your email?"
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                    />

                    <TextField 
                        label="PASSWORD"
                        secureTextEntry
                        placeholder="What’s your password"
                        secureTextEntry
                        keyboardType='default'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>

                <ForgotLink onForgot={this.onForgot}/>
                <Btn 
                    title="SIGN IN"
                    bgColor="#11b8ab"
                    onPress={this.onButtonPress}
                />
                <Text style={{ marginVertical: 15, textAlign: 'center' }}>Or sign in with</Text>
                <Btn 
                    title="FACEBOOK"
                    bgColor="#3B5998"
                    onPress={() => { alert('loginface'); }}
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

export default SigninForm;
