import React, { Component } from 'react';
import { View, ScrollView, Alert, AsyncStorage, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Avatar, Icon } from 'react-native-elements';

// import firebase from 'firebase';

import * as config from '../../../config/config';
import { handleUpdateProfle } from '../../../actions';
// import Touch from '../../../components/Touch';
import Spinner from '../../../components/Spinner';
import TextField from '../../../components/TextField';
import Btn from '../../../components/Btn';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Edit Profile',
    headerBackTitle: null,
    headerTintColor: config.COLOR.primary,
    headerTitleStyle: config.headerTitleStyle,
    headerStyle: config.headerStyle
  })

  state = {
    user: null,
    name: '',
    email: '',
    phone: '',
    isLogin: null,
    loading: false
  }

  async componentDidMount() {
    const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
    console.log('fsdf', JSON.parse(fetchAcc))
    if (JSON.parse(fetchAcc).isLogin) {
      this.setState({
        user: JSON.parse(fetchAcc),
        name: JSON.parse(fetchAcc).name,
        email: JSON.parse(fetchAcc).email,
        phone: JSON.parse(fetchAcc).phone
      });
    } else {
      this.setState({ isLogin: false });
    }
  }

  onSubmitUpdate = () => {
    const { name, phone, email } = this.state;


    Alert.alert(
      'Update Prfile.',
      'Do you want to update your profile?',
      [
        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
        { text: 'Update', onPress: () => this.props.handleUpdateProfle({ name, email, phone }) },
      ],
      { cancelable: false }
    );


  }

  render() {
    if (!this.state.user) {
      return <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}><Spinner /></View>;
    }
    return (

         <KeyboardAwareScrollView
          doNotForceDismissKeyboardWhenLayoutChanges
          style={styles.container }
          resetScrollToCoords={{ x: 0, y: 0 }}

          scrollEnabled
          animated
        >


          <View style={styles.heading}>
            <View>
              <Avatar
                xlarge
                rounded
                source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
                onPress={() => console.log('Works!')}
                activeOpacity={0.7}
              />

              <Icon
                size={15}
                name="camera-alt"
                color={config.COLOR.secondary}
                containerStyle={{ position: 'absolute', right: -10, top: 30, margin: 0 }}
                raised
                reverse
              />

            </View>
          </View>

          <View style={{ padding: 15 }}>

            <View style={[styles.section, config.STYLES.boxShadow]}>
              <Icon name="person" color={config.COLOR.primary} />
              <View style={{ flex: 1, marginLeft: 20 }}>
                <TextField
                  label="User Name"
                  value={this.state.name}
                  onChangeText={(text) => this.setState({ name: text })}
                  editable
                />
              </View>
            </View>
            <View style={[styles.section, config.STYLES.boxShadow]}>
              <Icon name="email" color={config.COLOR.primary} />
              <View style={{ flex: 1, marginLeft: 20 }}>
                <TextField
                  label="Email"
                  keyboardType="email-address"
                  value={this.state.email}
                  onChangeText={(text) => this.setState({ email: text })}
                  editable
                />
              </View>
            </View>
            <View style={[styles.section, config.STYLES.boxShadow]}>
              <Icon name="phone" color={config.COLOR.primary} />
              <View style={{ flex: 1, marginLeft: 20 }}>
                <TextField
                  label="Phone"
                  keyboardType='numeric'
                  value={this.state.phone}
                  onChangeText={(text) => this.setState({ phone: text })}
                  editable
                />
              </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <Btn
                title="UPDATE PROFILE"
                bgColor={config.COLOR.primary}
                containerStyle={{ marginTop: 20 }}
                onPress={this.onSubmitUpdate}
              />
            </View>

          </View>

        </KeyboardAwareScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.COLOR.background
  },
  heading: {
    height: 250,
    backgroundColor: config.COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1
  },
  // titleSection: {
  //   fontSize: 13,
  //   color: '#777',
  //   fontWeight: '600',
  //   marginBottom: 15
  // },
  // borderStyle: {
  //   borderColor: '#eee',
  //   borderWidth: 1
  // },
  // row: {
  //   paddingHorizontal: 15,
  //   paddingVertical: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // rowText: {
  //   fontSize: 15,
  //   fontWeight: '500',
  //   marginLeft: 15
  // },
  // titleProfile: {
  //   fontSize: 15,
  //   fontWeight: '500',
  //   marginBottom: 10
  // }
});

// const mapStateToProps = ({ fetchAcc }) => ({
//   user: fetchAcc
// });

export default connect(null, { handleUpdateProfle })(ProfileScreen);
