import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    AsyncStorage
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
//import { accountFetch } from '../../../actions';

import { COLOR, headerTitleStyle, headerStyle } from '../../../config/config';
import { Spinner } from '../../../components/Spinner';
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
    state = {
        userLogin: null
    };
    async componentWillMount() {
        //await this.props.accountFetch();
        const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
        // if (JSON.parse(fetchAcc).isLogin) {
        //     this.setState({ isLogin: JSON.parse(fetchAcc).isLogin });
        // } else {
        //     this.setState({ isLogin: false });
        // }
        // Reactotron.log(this.state.userLogin);
        // // firebase.auth().signOut().then(() => {
        // //     // Sign-out successful.
        // //     }).catch((error) => {
        // //     // An error happened.
        // // });
        if (JSON.parse(fetchAcc).isLogin) {
            this.setState({ userLogin: JSON.parse(fetchAcc) });
        } else {
            this.setState({ isLogin: false });
        }
    }
    renderTitleAvatar = () => {
        if (!this.state.userLogin) {
            return <Spinner size="large" />;
        }
        return (
            <TitleAvatar data={this.state.userLogin} />
        );
    }
    renderUserInfo = () => {
        if (!this.state.userLogin) {
            return <Spinner size="large" />;
        }
        return (
            <UserInfo data={this.state.userLogin} />
        );
    }

    render() {
        //const { state } = this.props.navigation.params;
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                {this.renderTitleAvatar()}
                {this.renderUserInfo()}
                <Services />
                <SignoutButton />
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ fetchAcc }) => {
  const { account } = fetchAcc;
  return { account };
};


export default connect(mapStateToProps, { })(ProfileScreen);
