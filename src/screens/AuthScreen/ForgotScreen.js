import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import TextField from '../../components/TextField';
import Btn from '../../components/Btn';

import logo from '../../../assets/images/logo.png';
import { 
    COLOR, 
    WIDTH_SCREEN, 
    HEIGHT_SCREEN, 
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
            <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: COLOR.background }}>
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
                                bgColor={COLOR.primary}
                                onPress={this.onButtonPress}
                            />
                            <Text style={{ marginVertical: 15, textAlign: 'center' }}>Or sign in with</Text>
                            <Btn 
                                title="FACEBOOK"
                                bgColor="#3B5998"
                                onPress={() => { alert('loginface'); }}
                            />

                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Text style={{ color: '#95989A' }}>Do not have an account? </Text>
                                <Text style={{ fontWeight: 'bold' }} onPress={this.onSignUp}>
                                    Sign up
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        minHeight: HEIGHT_SCREEN - 90,
        alignItems: 'center',
    },
    section: {
        flex: 1,
        alignItems: 'center'
    },
    logoStyle: {
        marginVertical: 30
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
        width: WIDTH_SCREEN - 100,
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
