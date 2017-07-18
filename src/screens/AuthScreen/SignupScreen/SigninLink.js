import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { HEIGHT_SCREEN } from '../../../config/config';

class SigninLink extends Component {
    render() {
        const { wrapSigninLink, textStyle } = styles;
        return (
            <View style={wrapSigninLink}>
                <Text style={textStyle}>
                    <Text>Already have an account?</Text>
                    <Text 
                        style={{ fontWeight: 'bold' }}
                        onPress={this.onSignIn}
                    >Sign in</Text>
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapSigninLink: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textStyle: {
        marginTop: 15,
    }
});

export default SigninLink;