import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Icon, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import { widthScreen, heightScreen, heightHeader } from '../../config/config'; 
import logo from '../../../assets/images/logo.png';

class SigninScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign in',
        headerTintColor: '#313131',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            size={24}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />,
        headerTitleStyle: {
            fontSize: 17,
        },
        headerStyle: {
            paddingTop: 'auto',
            height: heightHeader,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
        },
    })
    state = { email: 'Your email address', password: '' };

    onSignUp = () => {
        this.props.navigation.navigate('signup');
    }
    onForgot = () => {
        this.props.navigation.navigate('forgot');
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logoStyle} />
                <Text style={styles.desStyle}>
                    Empowering global artisans & small businesses by artificial intelligent
                </Text>
                <View style={{ marginTop: 10 }}>
                    <View style={{ widthScreen }}>
                        <FormLabel 
                            labelStyle={{ fontWeight: '300', color: '#313131' }}
                        >
                            EMAIL
                        </FormLabel>
                        <FormInput
                            value={this.state.email}
                            placeholder="What's your email?"
                            placeholderTextColor='#A8A8A8'
                            keyboardType='email-address'
                            inputStyle={{ fontSize: 14, paddingLeft: 3, width: width - 30 }}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={{ widthScreen, marginBottom: 10 }}>
                        <FormLabel 
                            labelStyle={{ fontWeight: '300', color: '#313131' }}
                        >
                            PASSWORD
                        </FormLabel>
                        <FormInput
                            secureTextEntry
                            placeholder="What’s your password"
                            placeholderTextColor='#A8A8A8'
                            keyboardType='default'
                            inputStyle={{ fontSize: 14, paddingLeft: 3, width: widthScreen - 30 }}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>
                </View>
                <View 
                    style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 20 }}
                >
                    <Icon
                        name='info-outline'
                        color='#11b8ab'
                        size={14}
                        onPress={this.onForgot}
                    />
                    <Text 
                        onPress={this.onForgot} 
                        style={{ color: '#11b8ab', fontSize: 12, fontWeight: '300', marginLeft: 5 }}
                    > 
                        Forgot password?
                    </Text>
                </View>
               
                <View 
                    style={{ 
                        flex: 1, 
                        justifyContent: 'space-around', 
                        alignItems: 'center', 
                        marginTop: 20,
                        marginBottom: 20
                    }}
                >
                    <LinearGradient
                        colors={['#11B8AB', '#65C5B9']}
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        style={{ 
                            width: 200, 
                            height: 50, 
                            alignItems: 'center', 
                            justifyContent: 'center'
                         }}
                    >
                        <Text
                            style={{
                            backgroundColor: 'transparent',
                            fontSize: 14,
                            color: '#FFFFFF',
                            }}
                        >
                            SIGN IN
                        </Text>
                    </LinearGradient>
                    <Text >Or sign in with</Text>
                    <Button
                        title='FACEBOOK'
                        onPress={() => { }}
                        backgroundColor='#3B5998'
                        fontSize={14}
                        buttonStyle={{ width: 200, height: 50 }}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text>Do not have an account? </Text>
                        <Text style={{ fontWeight: 'bold' }} onPress={this.onSignUp}>
                            Sign up
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center'
    },
    logoStyle: {
        // resizeMode: 'contain',
        // width: 170,
        marginTop: 30,
        marginBottom: 20,
    },
    desStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        backgroundColor: 'transparent',
        width: widthScreen - 100,
        lineHeight: 25
    },
    textStyle: {
        textAlign: 'center',
    }
});

export default SigninScreen;
