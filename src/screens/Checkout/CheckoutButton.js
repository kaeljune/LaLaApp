import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import GradientButton from '../../components/GradientButton';

class CheckoutButton extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <GradientButton
                    title='CHECKOUT'
                    colors={['#11B8AB', '#65C5B9']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center', 
        marginTop: 25
    }
});

export default CheckoutButton;
