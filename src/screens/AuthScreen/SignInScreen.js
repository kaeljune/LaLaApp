import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Icon, Button } from 'react-native-elements';

import logo from '../../../assets/icons/logo.png';

class SigninScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign in',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
        />,
    })
    state = { email: 'Your email address', password: '' };

    onBack = () => {

    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={{ alignSelf: 'center' }} />
                <Text>
                    Empowering global artisans & small businesses by artificial intelligent
                </Text>
                <View>
                    <View style={{ marginBottom: 10 }}>
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='info-outline'
                        color='#FF5700'
                    />
                    <Text style={{ color: '#FF5700' }}> Forgot password?</Text>
                </View>
                <Button
                    title='Sign in'
                    onPress={() => { }}
                />
                <View>
                    <Text>Or sign in with</Text>
                    <Button
                        title='Facebook'
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>Do not have an account?</Text>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.onSignIn}>
                        Sign up
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
    }
});

export default SigninScreen;
