import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR } from '../../../config/config';

class ForgotLink extends Component {
    onForgot = () => {
        this.props.onForgot();
    }
    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <View style={containerStyle}>
                <Icon
                    name='info-outline'
                    color="#999"
                    size={20}
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
        marginBottom: 30
    },
    textStyle: {
        color: '#999',
         fontSize: 16, 
         fontWeight: '300', 
         marginLeft: 5
    }
});

export default ForgotLink;
