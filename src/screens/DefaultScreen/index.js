import React, { Component } from 'react';
import { 
    Text, 
    View,
    Animated, 
    AsyncStorage, 
    StyleSheet, 
    Image, 
} from 'react-native';
import _ from 'lodash';

import { AppLoading } from 'expo';

import Btn from '../../components/Btn';

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
        //await AsyncStorage.removeItem('@userLogin');
        const userData = await AsyncStorage.getItem('@userLogin');
            //this.props.navigation.navigate('isSignedIn');
        
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
                <View>
                    <Image source={logo} style={styles.logoStyle} />
                </View>
                <View>
                    <Text style={styles.desStyle}>
                        Empowering global artisans & small businesses by artificial intelligent
                    </Text>
                </View>
                
                <View style={{ marginBottom: HEIGHT_SCREEN / 6, }}>
                    <Btn 
                        title="START NOW"
                        bgColor="#11b8ab"
                        onPress={this.onGetStarted}
                    />

                     <Text style={styles.textStyle}>
                        <Text>Already have an account? </Text>
                        <Text style={{ fontWeight: '600' }} onPress={this.onSignIn}>
                            Sign in
                        </Text>
                    </Text>
                </View>
            </Animated.Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',
        justifyContent: 'space-between',
        width: WIDTH_SCREEN
    },
    logoStyle: {
        resizeMode: 'contain',
        width: 275,
        //height: 40,
        marginTop: HEIGHT_SCREEN / 5,
        // marginBottom: HEIGHT_SCREEN / 6,
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
