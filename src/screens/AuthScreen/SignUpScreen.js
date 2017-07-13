import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';
import { FormLabel, FormInput, Icon, Button } from 'react-native-elements';

//import logo from '../../../assets/icons/logo.png';

class SignupScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign up',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
        />,
    })
    state = { name: '', email: '', phone: '', password: '' };

    onTerms = () => {

    }
    render() {
        return (
            <View style={styles.container}>           
                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginBottom: 10 }}>
                        <FormLabel>Full Name</FormLabel>
                        <FormInput
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <FormLabel>Phone Number</FormLabel>
                        <FormInput
                            value={this.state.phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>By pressing continue, you are agreeing to be bound by Airlala’s</Text>
                        <Text style={{ fontWeight: 'bold' }} onPress={this.onTerms}>
                            Terms of Use and Privacy Policy.
                        </Text>
                    </View>
                    <Button
                        title='Sign in'
                        onPress={() => { }}
                    />
                </View>
                <View>
                    <Text>Or sign in with</Text>
                    <Button
                        title='Facebook'
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>Already have an account?</Text>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.onSignIn}>
                        Sign in
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

export default SignupScreen;
