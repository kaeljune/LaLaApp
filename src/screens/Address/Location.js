import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Location = ({ item, onPress }) =>
  <View
    style={{
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    }}
  >
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        <Icon name="location-on" size={18} color="#454545" />
        <Text style={styles.textLocation}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  </View>;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
  },
  textLocation: {
    fontSize: 16,
    marginLeft: 20,
    color: '#454545'
  }
});

export default Location;