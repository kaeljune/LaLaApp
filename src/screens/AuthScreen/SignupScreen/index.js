import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import {
    emailLogin, emailChanged, passwordChanged,
    phoneChanged, nameChanged,
} from '../../../actions';

import GradientButton from '../../../components/GradientButton';
import { Spinner } from '../../../components/Spinner';
import {
    HEIGHT_SCREEN, COLOR,
    headerStyle, headerTitleStyle
} from '../../../config/config';
import FacebookLogin from '../../../components/FacebookLogin';
import SigninLink from './SigninLink';
import LinkTerm from './LinkTerm';
import TextField from '../../../components/TextField';

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
    state = {
        userData: null,
    };
    async componentWillMount() {
        const userData = await AsyncStorage.getItem('@userLogin');
        if (userData) {
            this.setState({ userData });
            this.props.navigation.navigate('isSignedIn');
        } else {
            this.setState({ userData: false });
        }
    }
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }
    onPhoneChange = (text) => {
        this.props.phoneChanged(text);
    }
    onNameChange = (text) => {
        this.props.nameChanged(text);
    }
    onTerms = () => {
        this.props.navigation.navigate('term');
    }
    onSignIn = () => {
        this.props.navigation.navigate('signin');
    }
    onButtonPress = async () => {
        const { email, password, phone, name } = this.props;
        await this.props.emailLogin({ email, password, phone, name });
        this.props.navigation.navigate('profile');
    }
    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <View
                style={styles.containerStyle1}
            >
                <GradientButton
                    title='SIGN IN'
                    colors={['#11B8AB', '#65C5B9']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    onPress={this.onButtonPress}
                />
            </View>
        );
    }
    
    render() {
        const { containerStyle } = styles;
        return (
            <ScrollView style={containerStyle}>
                <KeyboardAvoidingView behavior={'padding'}>
                    <View>
                        <TextField 
                            label="FULL NAME"
                            value={this.props.name}
                            placeholder="What's your name?"
                            onChangeText={this.onNameChange}
                        />
                        <TextField 
                            label="EMAIL"
                            value={this.props.email}
                            placeholder="What's your email?"
                            keyboardType='email-address'
                            onChangeText={this.onEmailChange}
                        />
                        <TextField 
                            label="PHONE NUMBER"
                            value={this.props.phone}
                            placeholder="What’s your mobile number"
                            keyboardType='numeric'
                            onChangeText={this.onPhoneChange}
                        />
                        <TextField 
                            label="PASSWORD"
                            secureTextEntry
                            placeholder="What’s your password"

                            keyboardType='default'
                            value={this.props.password}
                            onChangeText={this.onPasswordChange}
                        />

                        {/* <View>
                            <FormLabel labelStyle={{ fontWeight: '300', color: '#313131' }}>
                                FULL NAME
                            </FormLabel>
                            <FormInput
                                value={this.props.name}
                                placeholder="What's your name?"
                                placeholderTextColor='#A8A8A8'
                                inputStyle={{ 
                                    fontSize: 14, 
                                    paddingLeft: 3, 
                                    width: WIDTH_SCREEN - 30 }}
                                onChangeText={this.onNameChange}
                            />
                        </View>
                        <View>
                            <FormLabel
                                labelStyle={{ fontWeight: '300', color: '#313131' }}
                            >
                                EMAIL
                            </FormLabel>
                            <FormInput
                                value={this.props.email}
                                placeholder="What's your email?"
                                placeholderTextColor='#A8A8A8'
                                keyboardType='email-address'
                                inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
                                onChangeText={this.onEmailChange}
                            />
                        </View>
                        <View>
                            <FormLabel
                                labelStyle={{ fontWeight: '300', color: '#313131' }}
                            >
                                PHONE NUMBER
                            </FormLabel>
                            <FormInput
                                value={this.props.phone}
                                placeholder="What’s your mobile number"
                                placeholderTextColor='#A8A8A8'
                                keyboardType='numeric'
                                inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
                                onChangeText={this.onPhoneChange}
                            />
                        </View>
                        <View >
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
                                inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
                                value={this.props.password}
                                onChangeText={this.onPasswordChange}
                            />
                        </View> */}
                        <LinkTerm onTerms={this.props.onTerms} />
                        {this.renderButton()}
                    </View>
                    <FacebookLogin />
                    <SigninLink onSignIn={this.onSignIn} />
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
    containerStyle1: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, phone, name } = auth;
    return { email, password, error, loading, phone, name };
};

export default connect(mapStateToProps,
    { emailLogin, emailChanged, passwordChanged, phoneChanged, nameChanged })(SignupScreen);
