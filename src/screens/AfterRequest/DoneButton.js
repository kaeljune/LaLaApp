import React, { Component } from 'react';
import { View } from 'react-native';
import GradientButton from '../../components/GradientButton';

class DoneButton extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                    <GradientButton
                        title='DONE'
                        colors={['#11B8AB', '#65C5B9']}
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                    /> 
                </View>
        );
    }
}

export default DoneButton;
