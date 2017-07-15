import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';

import Slides from '../../components/slides';

const SLIDE_DATA = [
    { 
        text: 'AirLaLa empowers local artisans and SMEs by AI-powered marketplace.', 
        color: '#03A9F4' },
    { text: 'Promoting and fostering local artisans and young entrepreneurs.', color: '#009688' },
    { text: 'Matchmaking international buyers with local partners.', color: '#03A9F4' },
    { text: 'Together, we can nurture artinsanship and SMEs.', color: '#03A9F4' },
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
        this.props.navigation.navigate('signup');
    }
    onRefreshSlide = () => {
        this.props.navigation.navigate('signin');
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
