import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';

import GradientButton from '../../../components/GradientButton';
import { WIDTH_SCREEN } from '../../../config/config';

import ForgotLink from './ForgotLink';

class SigninForm extends Component {
    state = { email: 'Your email address', password: '' };
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <View>
                    <View style={{ width: WIDTH_SCREEN }}>
                        <FormLabel
                            labelStyle={{ fontWeight: '300', color: '#313131' }}
                        >
                            EMAIL
                        </FormLabel>
                        <FormInput
                            value={this.state.email}
                            placeholder="What's your email?"
                            placeholderTextColor='#A8A8A8'
                            keyboardType='email-address'
                            inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={{ width: WIDTH_SCREEN, marginTop: 10 }}>
                        <FormLabel
                            labelStyle={{ fontWeight: '300', color: '#313131' }}
                        >
                            PASSWORD
                        </FormLabel>
                        <FormInput
                            secureTextEntry
                            placeholder="What’s your password"
                            placeholderTextColor='#A8A8A8'
                            keyboardType='default'
                            inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>
                </View>
                <ForgotLink />
                <View style={{ marginTop: 25 }}>
                    <GradientButton
                        title='SIGN IN'
                        colors={['#11B8AB', '#65C5B9']}
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center',
    },
    textStyle: {
        textAlign: 'center',
    }
});

export default SigninForm;
