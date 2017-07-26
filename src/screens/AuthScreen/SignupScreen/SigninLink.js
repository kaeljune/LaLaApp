import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const SigninLink = (props) => {
    const { wrapSigninLink, textStyle } = styles;
    return (
        <View style={wrapSigninLink}>
            <Text style={textStyle}>
                <Text style={{ color: '#95989A' }}>Already have an account?</Text>
                <Text 
                    style={{ fontWeight: '600' }}
                    onPress={props.onSignIn}
                >&nbsp;Sign in</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapSigninLink: {
        paddingVertical: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textStyle: {
        marginTop: 15,
    }
});

export default SigninLink;
