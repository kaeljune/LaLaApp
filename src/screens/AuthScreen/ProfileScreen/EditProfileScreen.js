import React, { Component } from 'react';
import { View, Alert, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Avatar, Icon } from 'react-native-elements';
// import { ImagePicker } from 'expo';

import * as config from '../../../config/config';
import { handleUpdateProfle } from '../../../actions';
// import Touch from '../../../components/Touch';
import Spinner from '../../../components/Spinner';
import TextField from '../../../components/TextField';
import Btn from '../../../components/Btn';
// import Touch from '../../../components/Touch';

class ProfileScreen extends Component {
  static navigationOptions = () => ({
    title: 'Edit Profile',
    headerBackTitle: null,
    headerTintColor: config.COLOR.secondary,
    headerTitleStyle: config.headerTitleStyle,
    headerStyle: config.headerStyle
  })

  state = {
    isModal: false,
    user: null,
    avatar: '',
    name: '',
    email: '',
    phone: '',
    isLogin: null,
  }

  async componentDidMount() {
    const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');

    if (JSON.parse(fetchAcc).isLogin) {
      this.setState({
        user: JSON.parse(fetchAcc),
        name: JSON.parse(fetchAcc).name,
        email: JSON.parse(fetchAcc).email,
        phone: JSON.parse(fetchAcc).phone,
        // avatar: JSON.parse(fetchAcc).avatar
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
        style={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
        animated
      >
        {/* <Modal
          animationType="fade"
          transparent
          visible={this.state.isModal}
          onRequestClose={() => { this.setState({ isModal: false }); }}
        >
          <View style={{ backgroundColor: 'rgba(0,0,0,.3)', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <View
              style={{
                width: config.WIDTH_SCREEN,
                backgroundColor: '#fff',
                borderRadius: 3,
              }}
            >
              <View style={{ paddingVertical: 15, marginBottom: 30, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: '600' }}>Select image from :</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ alignItems: 'center', }}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon
                      name="add-a-photo"
                      size={35}
                      color={config.COLOR.primary}
                      containerStyle={{ backgroundColor: '#f8f8f8', padding: 15, borderRadius: 3 }}
                    />
                    <Text style={{ fontSize: 16, marginTop: 15 }}>Camera</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity onPress={this.pickImgFromLibrary}>
                    <Icon
                      name="photo-library"
                      size={35}
                      color={config.COLOR.primary}
                      containerStyle={{ backgroundColor: '#f8f8f8', padding: 15, borderRadius: 3 }}
                    />
                    <Text style={{ fontSize: 16, marginTop: 15 }}>Camera</Text>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={{ marginTop: 15, padding: 15 }}>
                <Touch onPress={() => this.setState({ ...this.state, isModal: false })}>
                  <View style={{ backgroundColor: '#fff', padding: 15, borderWidth: 1, borderColor: '#eee', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center' }}>Cancel</Text>
                  </View>
                </Touch>
              </View>
            </View>
          </View>
        </Modal> */}
        <View style={styles.heading}>
          <View>
            <TouchableOpacity>
              <Avatar
                xlarge
                rounded
                icon={{ name: 'person' }}
              />

              {/* <Icon
                size={15}
                name="camera-alt"
                color={config.COLOR.secondary}
                containerStyle={{ position: 'absolute', right: -10, top: 30, margin: 0 }}
                raised
                reverse
              /> */}
            </TouchableOpacity>

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
  }
});

export default connect(null, { handleUpdateProfle })(ProfileScreen);
