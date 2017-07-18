import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

class ForgotLink extends Component {
    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <View style={containerStyle}>
                <Icon
                    name='info-outline'
                    color='#11b8ab'
                    size={14}
                    onPress={this.onForgot}
                />
                <Text
                    onPress={this.onForgot}
                    style={textStyle}
                >
                    Forgot password?
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row', 
        alignSelf: 'flex-end', 
        marginRight: 20, 
        marginTop: 10
    },
    textStyle: {
        color: '#11b8ab',
         fontSize: 12, 
         fontWeight: '300', 
         marginLeft: 5
    }
});

export default ForgotLink;
