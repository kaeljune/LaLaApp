import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import GradientButton from '../../../components/GradientButton';

class SignupButton extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <View
                style={containerStyle}
            >
                <GradientButton
                    title='SIGN IN'
                    colors={['#11B8AB', '#65C5B9']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    onPress={this.props.onPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default SignupButton;
