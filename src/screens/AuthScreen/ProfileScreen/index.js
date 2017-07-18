import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, headerTitleStyle, headerStyle } from '../../../config/config';
import TitleStyle from './TitleAvatar';
import UserInfo from './UserInfo';
import Services from './Services';
import SignoutButton from './SignoutButton';

class ProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Account',
        headerTintColor: COLOR.primaryFont,
        headerLeft: <Icon
            name='chevron-left'
            color={COLOR.primary}
            size={24}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />,
        headerRight:
        <View 
            style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                paddingRight: 15 
            }}
        >
            <Icon
                name='create'
                size={15}
                color='#FF5700'
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 5, color: '#FF5700' }}>Edit</Text>
        </View>,
        headerTitleStyle,
        headerStyle,
    })
    render() {
        return (
            <View>
                <TitleStyle />
                <UserInfo />
                <Services />
                <SignoutButton />
            </View>
        );
    }
}


export default ProfileScreen;
