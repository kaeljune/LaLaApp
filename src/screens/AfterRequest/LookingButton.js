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
                            width: 150,
                            height: 35,
                            top: -48,
                            marginTop: 30
                        }}
                    />
                </View>
        );
    }
}

export default LookingButton;
