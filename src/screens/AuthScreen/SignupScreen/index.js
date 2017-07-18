import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import { HEIGHT_SCREEN, COLOR, headerStyle, headerTitleStyle } from '../../../config/config';
import SignupForm from './SignupForm';
import FacebookLogin from '../../../components/FacebookLogin';

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
        const { containerStyle, wrapSigninLink } = styles;
        return (
            <ScrollView style={containerStyle}>
                <KeyboardAvoidingView behavior={'padding'}>
                    <SignupForm />
                    <FacebookLogin />
                    <View style={wrapSigninLink}>
                        
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                            <Text style={{ color: '#95989A' }}>Already have an account?</Text>
                            <Text 
                                style={{ fontWeight: 'bold', marginLeft: 5 }} 
                                onPress={this.onSignIn}
                            >
                                Sign in
                        </Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView > 
        ); 
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        height: HEIGHT_SCREEN, 
        backgroundColor: '#f8f8f8'
    },
    wrapSigninLink: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center',
    }
});

export default SignupScreen;
