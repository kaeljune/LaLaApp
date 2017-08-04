import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';

import { COLOR, headerTitleStyle, headerStyle } from '../../../config/config';
import TitleAvatar from './TitleAvatar';
import UserInfo from './UserInfo';
import Services from './Services';
import SignoutButton from './SignoutButton';

class ProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Account',
        headerTintColor: COLOR.primary,
        // headerLeft: <Icon
        //     name='chevron-left'
        //     color={COLOR.primary}
        //     size={24}
        //     style={{ marginLeft: 15 }}
        //     onPress={() => navigation.goBack()}
        // />,
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
                color={COLOR.secondary}
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 5, color: COLOR.secondary }}>Edit</Text>
        </View>,
        headerTitleStyle,
        headerStyle,
    })
    async componentWillMount() {
        const aa = await AsyncStorage.getItem('@userLogin');
        console.log(aa);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                const displayName = user.displayName;
                console.log(`  Name: ${displayName}`);
                // ...
            } else {
                // User is signed out.
                // ...
                console.log('hixhix');
            }
            });
        const user = await firebase.auth().currentUser;

        if (user != null) {
            user.providerData.forEach((profile) => {
                console.log(`Sign-in provider: ${profile.providerId}`);
                console.log(`  Provider-specific UID: ${profile.uid}`);
                console.log(`  Name: ${profile.displayName}`);
                console.log(`  Email: ${profile.email}`);
                console.log(`  Photo URL: ${profile.photoURL}`);
            });
        } else {
            console.log('koco');
        }
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <TitleAvatar />
                <UserInfo />
                <Services />
                <SignoutButton />
            </ScrollView>
        );
    }
}

const mapStateToProps = auth => ({ libraries: auth });

export default connect(mapStateToProps)(ProfileScreen);
