import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet, TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  requestLocationChanged
} from '../../actions';

import * as config from '../../config/config';

const locations = [
  { name: 'Ha Noi' },
  { name: 'Ho Chi Minh' },
  { name: 'Hai Phong' },
  { name: 'Da Nang' }
];

class Address extends Component {

  static navigationOptions = () => ({
    // title: 'Find Address',
    headerTintColor: config.COLOR.secondary,
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      height: config.HEIGHT_HEADER
    }
  })


  onChangeText = (location) => {
    this.props.requestLocationChanged(location);
  }

  render() {
    const { location } = this.props;
    const filtererLocation = locations.filter((item) => item.name.toLowerCase().indexOf(location.toLowerCase()) >= 0);
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#fff' }}>
          <TextInput
            placeholder="Where are you going?"
            onChangeText={this.onChangeText}
            value={location}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
          { location.length < 2 &&
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.titleSection}>RECENT SEARCHES</Text>
            <View>
              <View style={styles.row}>
                <Icon name="access-time" size={18} color="#454545" />
                <Text style={styles.textLocation}>Ha Noi, Viet Nam</Text>
              </View>
            </View>
          </View> }
          <View>
            {location.length < 2 &&
              <Text style={styles.titleSection}>POPULAR DESTINATIONS</Text>}
            <View>
            {filtererLocation.length > 0 ?
              <FlatList
                data={filtererLocation}
                keyExtractor={item => item.name}
                removeClippedSubviews={false}
                renderItem={({ item }) => (

                <TouchableOpacity
                  onPress={async() => {
                    await this.onChangeText(item.name);
                    await this.props.navigation.navigate('giveagift');
                  }}
                  key={item.name}
                >
                  <View style={styles.row}>
                    <Icon name="location-on" size={18} color="#454545" />
                    <Text style={styles.textLocation}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                )}
              />
            : <Text>No match address</Text>}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: config.HEIGHT_HEADER
  },

  input: {
    fontWeight: '700',
    fontSize: 25,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  section: {

  },
  titleSection: {
    fontSize: 11,
    color: '#353535',
    fontWeight: '600',
    marginBottom: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  textLocation: {
    fontSize: 16,
    marginLeft: 20,
    color: '#454545'
  }
});

const mapStateToProps = ({ requestGiftState }) => {
  const { location } = requestGiftState;
  return { location };
};

export default connect(mapStateToProps, { requestLocationChanged })(Address);
