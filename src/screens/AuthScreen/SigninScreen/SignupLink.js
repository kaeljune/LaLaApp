import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

import * as config from '../../../config/config';

const SignupLink = ({ onSignUp }) => {
    const { containerStyle } = styles;
    return (
        <Text style={containerStyle}>
            <Text style={{ color: '#858585' }}>New user? </Text>
            <Text style={{ fontWeight: '700', color: config.COLOR.primary }} onPress={onSignUp}>
                Sign up
            </Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    containerStyle: { 
        marginTop: 20
    }
});

export default SignupLink;
