import React, { Component } from 'react';
import { 
    Text, 
    Animated, 
    AsyncStorage, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TouchableOpacity } from 'react-native';
import { } from 'react-native-elements';
import _ from 'lodash';
import { AppLoading, LinearGradient } from 'expo';

import logo from '../../../assets/images/logo.png';
import backgroundImage from '../../../assets/images/bg.png';

const { width, height } = Dimensions.get('window');

class DefaultScreen extends Component {
    static navigationOptions = () => ({
        header: null,
    })
    state = {
        token: null,
    }

    async componentWillMount() {
        const token = await AsyncStorage.getItem('fb_token');
        if (token) {
            this.setState({ token });
            this.props.navigation.navigate('map');
        } else {
            this.setState({ token: false });
        }
    }
    onGetStarted = () => {
        this.props.navigation.navigate('welcome');
    }
    onSignIn = () => {
        this.props.navigation.navigate('signin', {
            transition: 'flipTop',
            name: 'Lucy',
        });
    }
    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }
        return (
            <Animated.Image
                style={styles.container}
                source={backgroundImage}
            >
                <Image source={logo} style={styles.logoStyle} />
                <Text style={styles.desStyle}>
                    Empowering global artisans & small businesses by artificial intelligent
                </Text>
                <TouchableOpacity onPress={this.onGetStarted}>
                    <LinearGradient
                        colors={['#11B8AB', '#65C5B9']}
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        style={{ 
                            width: 200, 
                            height: 50, 
                            padding: 17, 
                            alignItems: 'center', 
                            marginTop: 100 }}
                    >
                        <Text
                            style={{
                                backgroundColor: 'transparent',
                                fontSize: 14,
                                color: '#FFFFFF',
                            }}
                        >
                            START NOW
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.textStyle}>
                    <Text>Already have an account? </Text>
                    <Text style={{ fontWeight: '600' }} onPress={this.onSignIn}>
                        Sign in
                    </Text>
                </Text>
            </Animated.Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width,
        height
    },
    logoStyle: {
        resizeMode: 'contain',
        width: 275,
        //height: 40,
        marginTop: 120,
    },
    desStyle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        backgroundColor: 'transparent',
        marginTop: 100,
        width: width - 50
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '100',
        backgroundColor: 'transparent',
        marginTop: 30
    }
});

export default DefaultScreen;
