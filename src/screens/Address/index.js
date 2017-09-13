import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

import * as config from '../../config/config';

class Address extends Component {

  static navigationOptions = () => ({
    title: 'Find Address',
  })

  state = {
    location: ''
  }

  onChangeText = (location) => {
    this.setState({ location }, () => {
      if (this.state.location.length > 3) { console.log(12); }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#fff' }}>

          <TextInput
            placeholder="Where to?"
            value={this.state.location}
            onChangeText={location => this.onChangeText(location)}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
          { this.state.location.length < 3 && 
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
            { this.state.location.length < 3 &&
            <Text style={styles.titleSection}>POPULAR DESTINATIONS</Text>}
            <View>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('giveagift')}>
                <View style={styles.row}>
                  <Icon name="location-on" size={18} color="#454545" />
                  <Text style={styles.textLocation}>Ha Noi, Viet Nam</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('giveagift')}>
                <View style={styles.row}>
                  <Icon name="location-on" size={18} color="#454545" />
                  <Text style={styles.textLocation}>Ho Chi Minh, Viet Nam</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('giveagift')}>
                <View style={styles.row}>
                  <Icon name="location-on" size={18} color="#454545" />
                  <Text style={styles.textLocation}>Da Nang, Viet Nam</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('giveagift')}>
                <View style={styles.row}>
                  <Icon name="location-on" size={18} color="#454545" />
                  <Text style={styles.textLocation}>Ha Noi, Viet Nam</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('giveagift')}>
                <View style={styles.row}>
                  <Icon name="location-on" size={18} color="#454545" />
                  <Text style={styles.textLocation}>Ho Chi Minh, Viet Nam</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('giveagift')}>
                <View style={styles.row}>
                  <Icon name="location-on" size={18} color="#454545" />
                  <Text style={styles.textLocation}>Da Nang, Viet Nam</Text>
                </View>
              </TouchableWithoutFeedback>
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

export default Address;
