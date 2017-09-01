import React, { Component } from 'react';
import { View } from 'react-native';

import SplashScreen from '../../screens/SplashScreen';

const HocLoadding = (WrapComponent) => class HocComponet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 5000);
    }

    render() {
      if (this.state.loading) {
        return <SplashScreen />;
      }

      return (
        
        <WrapComponent {...this.props} /> 
       
      );
    }
  };

export default HocLoadding;
