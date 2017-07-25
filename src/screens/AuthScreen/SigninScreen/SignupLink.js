import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

const SignupLink = ({ onSignUp }) => {
    const { containerStyle } = styles;
    return (
        <Text style={containerStyle}>
            <Text>Do not have an account? </Text>
            <Text style={{ fontWeight: 'bold' }} onPress={onSignUp}>
                Sign up
            </Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    containerStyle: { 
        marginVertical: 20
    }
});

export default SignupLink;
