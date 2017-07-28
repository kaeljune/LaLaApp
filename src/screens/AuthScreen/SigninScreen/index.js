import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, headerTitleStyle, headerStyle } from '../../../config/config';
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
            <ScrollView contentContainerStyle={styles.ContainerStyle}>
                <View>
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
        padding: 20
    }
});

export default SigninScreen;
