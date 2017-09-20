import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import * as config from '../../../config/config';

const SignupLink = ({ onSignUp }) => {
    const { containerStyle } = styles;
    return (
        <View>
            <TouchableOpacity onPress={onSignUp} style={containerStyle}>
                <Text >
                    <Text style={{ color: '#858585' }}>New user? </Text>
                    <Text style={{ fontWeight: '700', color: config.COLOR.primary }} >
                        Sign up
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 20
    }
});

export default SignupLink;
