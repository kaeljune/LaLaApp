import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';

class GiftSelection extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: 'Gift selection',
    headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
    />,
    headerRight: <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon
                        name='create'
                        color='#11b8ab'
                        onPress={() => navigation.goBack()}
                    />
                    <Text>Edit</Text>
                </View>
    })
    render() {
        return (
            <View>
                Gift Selection
            </View>
        );
    }
}

export default GiftSelection;
