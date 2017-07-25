import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';

class SetFormRequest extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: 'Give a Gift',
    headerTitleStyle: {
        alignSelf: 'center'
    },
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
                <Text>Set Form</Text>
            </View>
        );
    }
}

export default SetFormRequest;
