import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, headerTitleStyle, headerStyle } from '../../../config/config';
import Brand from './Brand';
import SigninForm from './SigninForm';
import FacebookLogin from '../../../components/FacebookLogin';
import SignupLink from './SignupLink';

class SigninScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign in',
        headerTintColor: COLOR.primaryFont,
        headerLeft: <Icon
            name='chevron-left'
            color={COLOR.primary}
            size={24}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />,
        headerTitleStyle,
        headerStyle,
    })


    onSignUp = () => {
        this.props.navigation.navigate('signup');
    }
    onForgot = () => {
        this.props.navigation.navigate('forgot');
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8', }}>
                <View style={styles.container}>
                    <Brand />
                    <SigninForm />
                    <FacebookLogin />
                    <SignupLink onSignUp={this.onSignUp} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default SigninScreen;
