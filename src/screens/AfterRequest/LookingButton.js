import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { COLOR } from '../../config/config';

class LookingButton extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Button
                    title="LOOKING"
                    onPress={this.onGetStarted}
                    backgroundColor={COLOR.primary}
                    buttonStyle={{
                        width: 100,
                        height: 35,
                        top: -17
                    }}
                />
            </View>
        );
    }
}

export default LookingButton;
