import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import { HEIGHT_SCREEN, COLOR, headerStyle, headerTitleStyle } from '../../../config/config';
import SignupForm from './SignupForm';
import FacebookLogin from '../../../components/FacebookLogin';
import SigninLink from './SigninLink';

class SignupScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign up',
        headerTintColor: '#313131',
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
    onTerms = () => {
        this.props.navigation.navigate('term');
    }
    onSignIn = () => {
        this.props.navigation.navigate('signin');
    }
    render() {
        const { containerStyle } = styles;
        return (
            <ScrollView style={containerStyle}>
                <KeyboardAvoidingView behavior={'padding'}>
                    <SignupForm />
                    <FacebookLogin />
                    <SigninLink />
                </KeyboardAvoidingView>
            </ScrollView> 
        ); 
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        height: HEIGHT_SCREEN, 
        backgroundColor: '#f8f8f8'
    },
});

export default SignupScreen;
