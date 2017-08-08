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
import _ from 'lodash';

//import { accountFetch } from '../../../actions/auth-actions';
import { accountFetch } from '../../../actions';

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
        await this.props.accountFetch();
        //await this.props.employeesFetch();
        console.log(this.props);
    }
    
    async componentDidMount() {
        const aa = await AsyncStorage.getItem('@userLogin');
        console.log(aa);
        // firebase.auth().signOut().then(() => {
        //     // Sign-out successful.
        //     }).catch((error) => {
        //     // An error happened.
        // });
        await firebase.auth().onAuthStateChanged((user) => {
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
        // await firebase.auth().signOut().then(() => {
        //     // Sign-out successful.
        //     }).catch((error) => {
        //     // An error happened.
        //     });
        // this.props.accountFetch();
        // console.log(this.props.account);
    }
    componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
        console.log(nextProps);
    //this.createDataSource(nextProps);
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

const mapStateToProps = ({ fetchAcc }) => {
  //const account = _.map(state.account, (val, uid) => ({ ...val, uid }));
  const { account } = fetchAcc;
  return { account };
};


export default connect(mapStateToProps, { accountFetch })(ProfileScreen);
