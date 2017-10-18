import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { heightHeader } from '../config/config';

const navigationOptions = ({ navigation }) => ({
        title: 'hello',
        headerTintColor: '#313131',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            size={24}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />,
        headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
            <Icon
                size={15}
                name='chat'
                color='#FF5700'
                onPress={console.log(navigation.state)}
            />
            <Text style={{ marginLeft: 5, color: '#FF5700' }}>Chat</Text>
        </View>,
        headerTitleStyle: {
            fontSize: 17,
        },
        headerStyle: {
            paddingTop: 'auto',
            height: heightHeader,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
        },
    });

export default navigationOptions;
