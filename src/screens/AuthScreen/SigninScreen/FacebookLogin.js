import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';

class FacebookLogin extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <Text>Or sign in with</Text>
                <Button
                    title='FACEBOOK'
                    onPress={() => { }}
                    backgroundColor='#3B5998'
                    fontSize={14}
                    buttonStyle={{ width: 200, height: 50, marginTop: 15 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: { 
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15, 
    },
});

export default FacebookLogin;
