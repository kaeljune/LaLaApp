import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';

import * as config from '../../../config/config';
import { signOut, removeQuantity } from '../../../actions';
import Touch from '../../../components/Touch';
import Spinner from '../../../components/Spinner';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerBackTitle: null,
    headerTintColor: config.COLOR.primary,
    headerTitleStyle: config.headerTitleStyle,
    headerStyle: config.headerStyle,
    headerLeft: <Touch onPress={() => navigation.navigate('isFindGift')}>
      <View style={styles.actionHeader}>
        <Icon
          name="clear"
          color={config.COLOR.primary}
        />
      </View>
    </Touch>,
    headerRight: <Touch onPress={() => navigation.navigate('editprofile')}>
      <View style={styles.actionHeader}>
        <Icon
          name="settings"
          color={config.COLOR.secondary}
        />
      </View>
    </Touch>
  })

  state = {
    image: null
  }

  // async componentDidMount() {
  //   const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
  //   if (JSON.parse(fetchAcc).isLogin) {
  //     this.setState({ user: JSON.parse(fetchAcc) });
  //   } else {
  //     this.setState({ isLogin: false });
  //   }
  // }

  render() {
    if (!this.props.user) {
      return (<View
        style={[
          styles.container,
          { alignItems: 'center', justifyContent: 'center' }
        ]}
      ><Spinner /></View>);
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.heading}>
          <Avatar
            xlarge
            rounded
            icon={{ name: 'person' }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          {/* <Avatar
            xlarge
            rounded
            source={{ url: this.props.user.avatar  }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          /> */}

          <Text
            style={{
              color: '#fff',
              marginTop: 30,
              fontSize: 25,
              fontWeight: '400'
            }}
          >{this.props.user.name}</Text>
        </View>

        <View style={{ padding: 15, marginTop: 15 }}>
          <Text style={styles.titleSection}>USER PROFILE</Text>

          <View style={[config.STYLES.boxShadow, styles.section]}>
            <View style={[styles.borderStyle, { padding: 15, flexDirection: 'row' }]}>
              <Icon name="person" color={config.COLOR.primary} />
              <View style={{ marginLeft: 15, flex: 1 }}>
                <Text style={styles.titleProfile} >User name</Text>
                <Text style={{ color: '#888', }}>{this.props.user.name}</Text>
              </View>
            </View>

            <View style={[styles.borderStyle, { padding: 15, flexDirection: 'row' }]}>
              <Icon name="email" color={config.COLOR.primary} />
              <View style={{ marginLeft: 15, flex: 1 }}>
                <Text style={styles.titleProfile} >Email</Text>
                <Text style={{ color: '#888', }}>{this.props.user.email}</Text>
              </View>
            </View>

            <View style={{ padding: 15, flexDirection: 'row' }}>
              <Icon name="phone" color={config.COLOR.primary} />
              <View style={{ marginLeft: 15, flex: 1 }}>
                <Text style={styles.titleProfile} >Phone</Text>
                <Text style={{ color: '#888', }}>{this.props.user.phone}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ padding: 15 }}>
          <Text style={styles.titleSection}>SETTING</Text>
          <View style={[config.STYLES.boxShadow, styles.section]}>
            <Touch>
              <View style={[styles.row, styles.borderStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="payment" color={config.COLOR.primary} />
                  <Text style={styles.rowText} >Payment</Text>
                </View>
                <Icon name="keyboard-arrow-right" color={config.COLOR.secondary} />
              </View>
            </Touch>

            <Touch>
              <View style={[styles.row, styles.borderStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="help-outline" color={config.COLOR.primary} />
                  <Text style={styles.rowText} >Helps</Text>
                </View>
                <Icon name="keyboard-arrow-right" color={config.COLOR.secondary} />
              </View>
            </Touch>

            <Touch>
              <View style={[styles.row, styles.borderStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="assignment" color={config.COLOR.primary} />
                  <Text style={styles.rowText} >Terms &amp; Privacy</Text>
                </View>
                <Icon name="keyboard-arrow-right" color={config.COLOR.secondary} />
              </View>
            </Touch>

            <Touch onPress={this.props.removeQuantity}>
              <View style={[styles.row, styles.borderStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="cached" color={config.COLOR.primary} />
                  <Text style={styles.rowText}>Remove Cache</Text>
                </View>
                <Icon name="keyboard-arrow-right" color={config.COLOR.secondary} />
              </View>
            </Touch>

            <Touch onPress={this.props.signOut}>
              <View style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="exit-to-app" color={config.COLOR.primary} />
                  <Text style={styles.rowText}>Sign Out</Text>
                </View>
                <Icon name="keyboard-arrow-right" color={config.COLOR.secondary} />
              </View>
            </Touch>

          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  actionHeader: {
    paddingHorizontal: 15,
    height: config.HEIGHT_HEADER,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: config.COLOR.background
  },
  heading: {
    height: 300,
    backgroundColor: config.COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    backgroundColor: '#fff'
  },
  titleSection: {
    textAlign: 'center',
    fontSize: 15,
    color: '#353535',
    fontWeight: '400',
    marginBottom: 15
  },
  borderStyle: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15
  },
  titleProfile: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10
  }
});

const mapStateToProps = ({ fetchAcc }) => ({
  user: fetchAcc.userLogin
});

export default connect(mapStateToProps, { signOut, removeQuantity })(ProfileScreen);
