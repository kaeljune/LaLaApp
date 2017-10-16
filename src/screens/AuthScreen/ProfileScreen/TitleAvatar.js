import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

import { COLOR } from '../../../config/config';
import { Spinner } from '../../../components/Spinner';

// const TitleAvatar = ({ data, edit }) => {

class TitleAvatar extends Component {

  render() {
    const { data, edit } = this.props;
    const { wraperStyle, textStyle, avatarStyle } = styles;
    return (
      <View style={wraperStyle}>
        <View
          style={avatarStyle}
        >
          <Icon
            reverse
            reverseColor="#11b8ab"
            name='person-outline'
            color='#fff'
            size={45}
          />
        </View>

        {edit ? (
          <TouchableOpacity
            onPress={() => console.log('chon imaga')}
          >
            <View style={{ borderWidth: 1, borderColor: '#fff', paddingVertical: 5, paddingHorizontal: 10, marginTop: 15 }}>
              <Text style={{ color: '#fff' }}>Change photo</Text>
            </View>
          </TouchableOpacity>
        ) : (
            <Text style={textStyle}>{data.userLogin.name}</Text>
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wraperStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLOR.primary,
    paddingVertical: 40,
    marginBottom: 20,
  },
  textStyle: {
    color: '#fff',
    marginTop: 15,
    fontSize: 25,
    fontWeight: '600'
  },
  avatarStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TitleAvatar;
