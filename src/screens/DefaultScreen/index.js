import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  // AsyncStorage,
  StyleSheet,
  Image,
} from 'react-native';
import _ from 'lodash';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';

import { accountFetch, navLogin } from '../../actions';


import Btn from '../../components/Btn';

import logo from '../../../assets/images/logolarge.png';
import backgroundImage from '../../../assets/images/bg.png';
import { WIDTH_SCREEN, HEIGHT_SCREEN, COLOR } from '../../config/config';

class DefaultScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  })
  // async componentDidMount() {
  //await AsyncStorage.removeItem('@userLogin');
  // }

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
    return (
      <Image
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
            style={{ width: 150 }}
            onPress={this.onGetStarted}
          />

          <Text style={styles.textStyle} onPress={this.onSignIn}>
            <Text>Already have an account? </Text>
            <Text style={{ fontWeight: '600' }} >
              Sign in
            </Text>
          </Text>
        </View>
      </Image>
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
    width: WIDTH_SCREEN * 0.75
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '100',
    backgroundColor: 'transparent',
    marginTop: 30
  }
});
const mapStateToProps = ({ fetchAcc }) => {
  const { account } = fetchAcc;
  return { account };
};
export default connect(mapStateToProps, { accountFetch, navLogin })(DefaultScreen);
