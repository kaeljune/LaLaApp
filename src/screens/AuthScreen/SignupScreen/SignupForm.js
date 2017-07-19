import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';

import { WIDTH_SCREEN } from '../../../config/config';
import LinkTerm from './LinkTerm';
import SignupButton from './SignupButton';

class SignupForm extends Component {
    state = { name: '', email: '', phone: '', password: '' };
    
    render() {
        console.log(this.props.onTerms);
        return (
            <View>
                <View>
                    <FormLabel
                        labelStyle={{ fontWeight: '300', color: '#313131' }}
                    >
                        FULL NAME
                    </FormLabel>
                    <FormInput
                        value={this.state.name}
                        placeholder="What's your name?"
                        placeholderTextColor='#A8A8A8'
                        inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
                        onChangeText={name => this.setState({ name })}
                    />
                </View>
                <View>
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
                <View>
                    <FormLabel
                        labelStyle={{ fontWeight: '300', color: '#313131' }}
                    >
                        PHONE NUMBER
                            </FormLabel>
                    <FormInput
                        value={this.state.phone}
                        placeholder="What’s your mobile number"
                        placeholderTextColor='#A8A8A8'
                        keyboardType='numeric'
                        inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <View >
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
                <LinkTerm onTerms={this.props.onTerms} />
                <SignupButton onPress={this.props.onPress} />
            </View>
        );
    }
}

export default SignupForm;
