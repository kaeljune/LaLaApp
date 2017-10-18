import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { COLOR, headerTitleStyle, headerStyle } from '../../config/config';

class TermScreen extends Component {
    static navigationOptions = () => ({
    title: 'Term',
    headerTintColor: COLOR.primary,
    headerBackTitle: null,
    headerTitleStyle,
    headerStyle,
    })
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>This is term</Text>
            </View>
        );
    }
}

export default TermScreen;
