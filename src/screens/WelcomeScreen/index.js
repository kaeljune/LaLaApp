import React, { Component } from 'react';
import { AsyncStorage, Vibration } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';

import Slides from '../../components/slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Welcome to JobApp1', color: '#009688' },
    { text: 'Welcome to JobApp2', color: '#03A9F4' },
];

class WelcomeScreen extends Component {
    static navigationOptions = () => ({
        header: null
    })
    state = { token: null }

    async componentWillMount() {
        const token = await AsyncStorage.getItem('fb_token');
        if (token) {
            this.setState({ token });
            this.props.navigation.navigate('map');
        } else {
            this.setState({ token: false });
        }
    }
    onSlidesComplete = () => {
        Vibration.vibrate([0.00005]);
        this.props.navigation.goBack();
    }
    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }
        return (
            <Slides ref="slides" data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;
