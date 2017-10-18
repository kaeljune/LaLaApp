import React, { Component } from 'react';
import {
  Text,
  View,
  // Animated,
  // AsyncStorage,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';

import logo from '../../../assets/images/logolarge.png';
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../../config/config';
import { accountFetch, navLogin } from '../../actions';

import Btn from '../../components/Btn';

class DefaultScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  })

  // async componentDidMount() {
  //   await AsyncStorage.removeItem('@userLogin');
  // }

  onGetStarted = () => {
    this.props.navigation.navigate('welcome');
  }

  onSignIn = () => {
    this.props.navigation.navigate('signin', {
      transition: 'flipTop',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logoStyle} />

        <Text style={styles.desStyle}>
          Empowering global artisans & small businesses by artificial intelligent
        </Text>

        <View style={{ marginBottom: HEIGHT_SCREEN / 6, }}>
          <Btn
            title="START NOW"
            bgColor="#11b8ab"
            style={{ width: 150 }}
            onPress={this.onGetStarted}
          />

          <TouchableOpacity onPress={this.onSignIn}>
            <Text style={styles.textStyle}>
              <Text style={{ color: '#858585' }}>Already have an account? </Text>
              <Text style={{ fontWeight: '600' }} >
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: WIDTH_SCREEN
  },
  logoStyle: {
    resizeMode: 'contain',
    width: 275,
    marginTop: HEIGHT_SCREEN / 5,
  },
  desStyle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '400',
    width: WIDTH_SCREEN * 0.75
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 30
  }
});

const mapStateToProps = ({ fetchAcc }) => {
  const { account } = fetchAcc;
  return { account };
};

export default connect(mapStateToProps, { accountFetch, navLogin })(DefaultScreen);
