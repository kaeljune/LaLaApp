import React, { Component } from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

class SignupLink extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <Text style={containerStyle}>
                <Text>Do not have an account? </Text>
                <Text style={{ fontWeight: 'bold' }} onPress={this.onSignUp}>
                    Sign up
                </Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: { 
        marginBottom: 20,
    }
});

export default SignupLink;
