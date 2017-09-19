import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import TextField from '../../components/TextField';
import Btn from '../../components/Btn';

import logo from '../../../assets/images/logo.png';
import {
    COLOR,
    WIDTH_SCREEN,
    headerStyle,
    headerTitleStyle
} from '../../config/config';

class ForgotScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Reset Password',
        headerTintColor: COLOR.primary,
        // headerLeft: <Icon
        //     name='chevron-left'
        //     color={COLOR.primary}
        //     onPress={() => navigation.goBack()}
        // />,
        headerTitleStyle,
        headerStyle,
    })
    state = { email: '', password: '' };
    onSignUp = () => {
        this.props.navigation.navigate('signup');
    }

    render() {
        const { email } = this.state;
        const { container, logoStyle, desStyle } = styles;
        return (
            <View style={container}>
                <View style={[styles.section, { alignItems: 'center' }]}>
                    <Image source={logo} style={logoStyle} />
                    <Text style={desStyle}>
                        Can't sign in? Forget your password?
                        Enter your email address below and we'll help log you in
                    </Text>
                </View>

                <View style={styles.section}>
                    <View style={{ width: WIDTH_SCREEN - 40 }}>
                        <TextField
                            label="EMAIL"
                            value={email}
                            placeholder="What's your email?"
                            keyboardType='email-address'
                            onChangeText={() => this.setState({ email })}
                        />
                    </View>

                </View>

                <View style={styles.section}>
                    <View >
                        <Btn
                            title="REQUEST"
                            style={{ width: 150 }}
                            bgColor={COLOR.primary}
                            onPress={this.onButtonPress}
                        />
                        <Text style={{ marginVertical: 15, textAlign: 'center' }}>Or sign in with</Text>
                        <Btn
                            title="FACEBOOK"
                            style={{ width: 150 }}
                            bgColor="#3B5998"
                            onPress={() => { alert('loginface'); }}
                        />

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: '#95989A' }}>Do not have an account? </Text>
                            <Text style={{ fontWeight: '700', color: COLOR.primary }} onPress={this.onSignUp}>
                                Sign up
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#f8f8f8'
    },
    section: {
        alignItems: 'center'
    },
    logoStyle: {
        marginVertical: 20
    },
    wrapButtons: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    desStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '300',
        backgroundColor: 'transparent',
        width: WIDTH_SCREEN * 0.75,
        lineHeight: 25
    },
    textStyle: {
        textAlign: 'center',
    },
    labelStyle: {
        fontWeight: '300',
        color: COLOR.primaryFont
    }
});

export default ForgotScreen;
