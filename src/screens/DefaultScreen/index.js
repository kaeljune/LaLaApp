import React, { Component } from 'react';
import { 
    Text, 
    Animated, 
    AsyncStorage, 
    StyleSheet, 
    Image, 
    TouchableOpacity } from 'react-native';
import { } from 'react-native-elements';
import _ from 'lodash';
import { AppLoading, LinearGradient } from 'expo';

import logo from '../../../assets/images/logolarge.png';
import backgroundImage from '../../../assets/images/bg.png';
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../../config/config';

class DefaultScreen extends Component {
    static navigationOptions = () => ({
        header: null,
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
        if (_.isNull(this.state.userData)) {
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
                                fontWeight: '500',
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
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',
        width: WIDTH_SCREEN
    },
    logoStyle: {
        resizeMode: 'contain',
        width: 275,
        //height: 40,
        marginTop: HEIGHT_SCREEN / 5,
        marginBottom: HEIGHT_SCREEN / 6,
    },
    desStyle: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '400',
        backgroundColor: 'transparent',
        width: WIDTH_SCREEN - 50
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
