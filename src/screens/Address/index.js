import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, ScrollView, TouchableWithoutFeedback
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  requestLocationChanged
} from '../../actions';

//import * as config from '../../config/config';

class Address extends Component {

  static navigationOptions = () => ({
    title: 'Find Address',
  })

  onChangeText = (location) => {
    this.props.requestLocationChanged(location);
  }
  render() {
    const locations = [
      { name: 'Ha Noi' },
      { name: 'Ho Chi Minh' },
      { name: 'Hai Phong' },
      { name: 'Da Nang' }
    ];
    const { location } = this.props;
    const filtererLocation = 
      locations.filter((item) => item.name.indexOf(location) !== -1);
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#fff' }}>
          <TextInput
            placeholder="Where to?"
            value={location}
            onChangeText={this.onChangeText}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
          {location.length < 3 &&
            <View style={{ marginBottom: 30 }}>
              <Text style={styles.titleSection}>RECENT SEARCHES</Text>
              <View>
                <View style={styles.row}>
                  <Icon name="access-time" size={18} />
                  <Text style={{ fontSize: 16, marginLeft: 20 }}>Ha Noi, Viet Nam</Text>
                </View>
              </View>
            </View>}
          <View>
            {location.length < 3 &&
              <Text style={styles.titleSection}>POPULAR DESTINATIONS</Text>}
            <View>
              {filtererLocation.map((item) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.onChangeText(item.name);
                    this.props.navigation.navigate('giveagift');
                  }}
                  key={item.name}
                >
                  <View style={styles.row}>
                    <Icon name="location-on" size={18} color="#454545" />
                    <Text style={styles.textLocation}>{item.name}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
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
    flex: 1
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
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
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
