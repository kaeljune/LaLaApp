import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Modal,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { COLOR, STYLES } from '../../../config/config';
import Spinner from '../../../components/Spinner';
import TitleAvatar from './TitleAvatar';
import UserInfo from './UserInfo';
import Services from './Services';

class ProfileScreen extends Component {

  static navigationOptions = () => ({
    header: null
  })

  state = {
    userLogin: null,
    modalVisible: false,
    isEdit: false
  };


  async componentDidMount() {
    const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
    if (JSON.parse(fetchAcc).isLogin) {
      this.setState({ userLogin: JSON.parse(fetchAcc) });
    } else {
      this.setState({ isLogin: false });
    }
  }


  render() {
    if (!this.state.userLogin) {
      return <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}><Spinner /></View>;
    }
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { console.log(12); }}
        >
          <KeyboardAwareScrollView>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ddd'
                }}
              >
                <View style={{ width: 60, height: 60, justifyContent: 'center' }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ modalVisible: false, isEdit: false });
                    }}
                  >
                    <Icon name="clear" />
                  </TouchableOpacity>
                </View>
                <View>
                <Text style={{ backgroundColor: 'transparent', fontWeight: '700', fontSize: 18 }}>Edit profile</Text>
                </View>
                <View style={{ width: 60, height: 60, justifyContent: 'center' }}>
                  <TouchableOpacity
                    onPress={() => {
                    this.setState({ modalVisible: false, isEdit: false });
                    }}
                  >
                    <Icon name="check" color={COLOR.primary} />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <TitleAvatar data={this.state.userLogin} edit={this.state.isEdit} />
                <UserInfo data={this.state.userLogin} edit={this.state.isEdit} />

                <TouchableOpacity>
                  <View style={[STYLES.boxShadow, { margin: 15, backgroundColor: COLOR.primary, padding: 15, alignItems: 'center' }]}>
                    <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>Update profile</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>
          </KeyboardAwareScrollView>
        </Modal>
        <ScrollView>
          <View
            style={{
              backgroundColor: COLOR.primary,
              height: 330,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
            }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('isFindGift')}
            >
              <View style={{ width: 60, height: 60, justifyContent: 'center', }}>

                <Icon name="clear" color="#fff" />

              </View>
            </TouchableOpacity>

            <View >
              <Text style={{ backgroundColor: 'transparent', color: '#fff', fontWeight: '700', fontSize: 18 }}>Profile</Text></View>
            <TouchableOpacity
                onPress={() => this.setState({ isEdit: true, modalVisible: true })}
              >
            <View style={{ width: 60, height: 60, justifyContent: 'center' }}>

                <Icon name="edit" color="#fff" />

            </View>
            </TouchableOpacity>
          </View>
          <TitleAvatar data={this.state.userLogin} edit={this.state.isEdit} />
          <UserInfo data={this.state.userLogin} edit={this.state.isEdit} />
          <Services />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ fetchAcc }) => {
  const { account } = fetchAcc;
  return { account };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
});

export default connect(mapStateToProps)(ProfileScreen);

