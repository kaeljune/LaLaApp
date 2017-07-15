import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView, 
} from 'react-native';
import { FormLabel, FormInput, Icon, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

// const { LinearGradient } = Components;

//import logo from '../../../assets/icons/logo.png';
const { width, height } = Dimensions.get('window');

const heightHeader = (height * 50) / 667;

class SignupScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Sign up',
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
    state = { name: '', email: '', phone: '', password: '' };

    onTerms = () => {
        this.props.navigation.navigate('term');
    }
    onSignIn = () => {
        this.props.navigation.navigate('signin');
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>           
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <View style={{ width, marginBottom: 5 }}>
                            <FormLabel 
                                labelStyle={{ fontWeight: '300', color: '#313131' }}
                            >
                                FULL NAME
                            </FormLabel>
                            <FormInput
                                value={this.state.name}
                                placeholder="What's your name?"
                                placeholderTextColor='#A8A8A8'
                                inputStyle={{ fontSize: 14 }}
                                onChangeText={name => this.setState({ name })}
                            />
                        </View>
                        <View style={{ width, marginBottom: 10 }}>
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
                                inputStyle={{ fontSize: 14 }}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                        <View style={{ width, marginBottom: 10 }}>
                            <FormLabel 
                                labelStyle={{ fontWeight: '300', color: '#313131' }}
                            >
                                PHONE NUMBER
                            </FormLabel>
                            <FormInput
                                value={this.state.phone}
                                placeholder="What’s your mobile number"
                                placeholderTextColor='#A8A8A8'
                                keyboardType='numeric'
                                inputStyle={{ fontSize: 14 }}
                                onChangeText={phone => this.setState({ phone })}
                            />
                        </View>
                        <View style={{ width, marginBottom: 10 }}>
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
                                inputStyle={{ fontSize: 14 }}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                        </View>
                    </View>
                    <Text 
                        style={{ 
                            fontSize: 12,                   
                            width: (width - 50), 
                            textAlign: 'center', 
                            paddingTop: 10, 
                            paddingBottom: 10,
                            lineHeight: 20 
                        }}
                    >
                        <Text style={{ color: '#5A5A5A' }}>
                            By pressing continue, you are agreeing to be bound by Airlala’s 
                        </Text>
                        <Text 
                            style={{ fontWeight: 'bold', color: '#11B8AB' }} 
                            onPress={this.onTerms}
                        >
                            Terms of Use and Privacy Policy.
                        </Text>
                    </Text>
                    <LinearGradient
                        colors={['#11B8AB', '#65C5B9']}
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        style={{ width: 200, height: 50, padding: 17, alignItems: 'center' }}
                    >
                        <Text
                            style={{
                            backgroundColor: 'transparent',
                            fontSize: 14,
                            color: '#FFFFFF',
                            }}
                            onPress={() => { }}
                        >
                            CREATE NOW
                        </Text>
                    </LinearGradient>
                    <Text style={{ marginTop: 10, marginBottom: 10 }}>Or sign in with</Text>
                    <Button
                        title='FACEBOOK'
                        onPress={() => { }}
                        backgroundColor='#3B5998'
                        fontSize={14}
                        buttonStyle={{ width: 200, height: 50 }}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text>Already have an account?</Text>
                        <Text style={{ fontWeight: 'bold' }} onPress={this.onSignIn}>
                            Sign in
                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    textStyle: {
        textAlign: 'center',
    }
});

export default SignupScreen;
