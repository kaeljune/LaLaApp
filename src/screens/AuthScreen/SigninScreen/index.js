import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';

import { connect } from 'react-redux';
import {
    emailSignin1, emailSignin, signinEmailChanged, signinPasswordChanged,
} from '../../../actions';

import { COLOR, WIDTH_SCREEN, HEIGHT_SCREEN, 
    headerTitleStyle, headerStyle } from '../../../config/config';

import Brand from './Brand';
import SigninForm from './SigninForm';
import SignupLink from './SignupLink';

class SigninScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign in',
        headerTintColor: COLOR.primary,
        // headerLeft: <Icon
        //     name='chevron-left'
        //     color={COLOR.primary}
        //     onPress={() => navigation.goBack()}
        // />,
        headerTitleStyle,
        headerStyle,
    })
    state = {
        userData: null,
    };
    async componentWillMount() {
        console.log('hehe');
    }
    onSignUp = () => {
        this.props.navigation.navigate('signup');
    }
    onForgot = () => {
        this.props.navigation.navigate('forgot');
    }
    onButtonPress = async () => {
        const { emailSF, passwordSF } = this.props;
        try {
            await this.props.emailSignin({ emailSF, passwordSF });
            if (this.props.errorSF) {
                Alert.alert(
                    this.props.errorSF.name,
                    this.props.errorSF.message,
                    [
                        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                        { text: 'OK', onPress: () => {} },
                    ],
                    { cancelable: false }
                );
            } else {
                await this.props.navigation.navigate('profile');
            }   
        } catch (err) {
            //
        }  
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.ContainerStyle}>
                <View style={{ minHeight: HEIGHT_SCREEN - 95 }}>
                    <Brand />
                    <View style={{ alignItems: 'center', }}>
                        <SigninForm onButtonPress={this.onButtonPress} />
                        <SignupLink onSignUp={this.onSignUp} /> 
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    ContainerStyle: {
        backgroundColor: '#f8f8f8',
        minHeight: HEIGHT_SCREEN - 56
    },
    section: {
        width: WIDTH_SCREEN - 40
    }
});

const mapStateToProps = ({ signinState }) => {
    const { emailSF, passwordSF, errorSF, loadingSF, user } = signinState;
    return { emailSF, passwordSF, errorSF, loadingSF, user };
};

export default connect(mapStateToProps,
    { emailSignin, emailSignin1, signinEmailChanged, signinPasswordChanged })(SigninScreen);
