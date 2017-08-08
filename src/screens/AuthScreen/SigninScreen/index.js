import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, HEIGHT_SCREEN, headerTitleStyle, headerStyle } from '../../../config/config';
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

    onSignUp = () => {
        this.props.navigation.navigate('signup');
    }
    onForgot = () => {
        this.props.navigation.navigate('forgot');
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.ContainerStyle}>
                <View style={{ minHeight: HEIGHT_SCREEN - 95 }}>
                    <Brand />
                    <View style={{ alignItems: 'center', }}>
                        <SigninForm onForgot={this.onForgot} />
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
        justifyContent: 'center',
        padding: 20
    }
});

export default SigninScreen;
