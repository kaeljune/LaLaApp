import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import SplashScreen from '../../screens/SplashScreen';

const HocLoadding = (WrapComponent) => class HocComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: null,
            isLogin: null,
        };
    }
    async componentWillMount() {
        //
    }
    componentDidMount() {
        //   setTimeout(() => {
        //     this.setState({ loading: false });
        //   }, 5000);
    }

    render() {
        if (this.state.isLogin) {
            return <SplashScreen />;
        }
        return (
            <WrapComponent {...this.props} />
        );
    }
};

export default HocLoadding;
