import React, { Component } from 'react';
import { Text, Animated, AsyncStorage, StyleSheet, Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import _ from 'lodash';
import { AppLoading } from 'expo';

import logo from '../../../assets/icons/logo.png';


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
        this.props.navigation.navigate('main', {
            transition: 'flipTop',
            name: 'Lucy',
        });
    }
    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }
        return (
            <Animated.View style={styles.container}>
                <Image source={logo} style={{ alignSelf: 'center' }} />
                <Text style={styles.textStyle}>
                    Empowering global artisans & small businesses by artificial intelligent
                </Text>
                <Button
                    title="START NOW"
                    raised
                    onPress={this.onGetStarted}
                />
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>Already have an account?</Text>
                    <Text style={{ fontWeight: 'bold' }} onPress={this.onSignIn}>
                        Sign in
                    </Text>
                </View>
            </Animated.View>
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

export default DefaultScreen;
