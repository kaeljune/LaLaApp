import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Icon, Button } from 'react-native-elements';

import GradientButton from '../../components/GradientButton';
import TextField from '../../components/TextField';
import logo from '../../../assets/images/logo.png';
import { COLOR, WIDTH_SCREEN, HEIGHT_SCREEN,  headerStyle, headerTitleStyle } from '../../config/config';

class ForgotScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Reset Password',
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
    state = { email: '', password: '' };
    onSignUp = () => {
        this.props.navigation.navigate('signup');
    }
    render() {
        const { email } = this.state;
        const { container, wrapButtons, logoStyle, desStyle, labelStyle } = styles;
        return (
            <ScrollView style={{backgroundColor: COLOR.background }} contentContainerStyle={{ paddingVertical: 20 }}>
                <View style={container}>
                    <View style={styles.section}>
                        <Image source={logo} style={logoStyle} />
                        <Text style={desStyle}>
                            Can't sign in? Forget your password? 
                            Enter your email address below and we'll help log you in
                        </Text>
                    </View>
                    
                    <View style={styles.section}>
                        <TextField 
                            label="EMAIL"
                            value={email} 
                            placeholder="What's your email?"
                            keyboardType='email-address'
                            onChangeText={() => this.setState({ email })}
                        />
                    </View>
                    
                    <View style={styles.section}>
                        <View style={wrapButtons}>
                            <GradientButton
                                title='REQUEST'
                                colors={['#11B8AB', '#65C5B9']}
                                start={[0, 0.5]}
                                end={[1, 0.5]}
                            />
                            <Text>Or sign in with</Text>
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
                </View>
            </ScrollView>
            // <View style={container}>
            //     <Image source={logo} style={logoStyle} />
            //     <Text style={desStyle}>
            //         Can't sign in? Forget your password? Enter your email address below and we'll help log you in
            //     </Text>
            //     <View style={{ marginTop: 30 }}>
            //         <View style={{ width: WIDTH_SCREEN, marginBottom: 10 }}>
            //             <FormLabel labelStyle={labelStyle}>
            //                 EMAIL
            //             </FormLabel>
            //             <FormInput
            //                 value={this.state.email}
            //                 placeholder="What's your email?"
            //                 placeholderTextColor='#A8A8A8'
            //                 keyboardType='email-address'
            //                 inputStyle={{ fontSize: 14, paddingLeft: 3, width: WIDTH_SCREEN - 30 }}
            //                 onChangeText={email => this.setState({ email })}
            //             />
            //         </View>
            //     </View>
            //     <View style={wrapButtons}>
            //         <GradientButton
            //             title='REQUEST'
            //             colors={['#11B8AB', '#65C5B9']}
            //             start={[0, 0.5]}
            //             end={[1, 0.5]}
            //         />
            //         <Text>Or sign in with</Text>
            //         <Button
            //             title='FACEBOOK'
            //             onPress={() => { }}
            //             backgroundColor='#3B5998'
            //             fontSize={14}
            //             buttonStyle={{ width: 200, height: 50 }}
            //         />
            //         <View style={{ display: 'flex', flexDirection: 'row' }}>
            //             <Text>Do not have an account? </Text>
            //             <Text style={{ fontWeight: 'bold' }} onPress={this.onSignUp}>
            //                 Sign up
            //             </Text>
            //         </View>
            //     </View>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: HEIGHT_SCREEN - 90,
        backgroundColor: COLOR.background,
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
