import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet, TextInput,
  ScrollView,
  Animated,
  TouchableOpacity,
  FlatList,
  Platform
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Location from './Location';

import {
  requestLocationChanged,
  clearLocation
} from '../../actions';
import * as config from '../../config/config';


const locations = [
  { name: 'Ha Noi, Viet Nam' },
  { name: 'Ho Chi Minh, Viet Nam' },
  { name: 'Hai Phong, Viet Nam' },
  { name: 'Da Nang, Viet Nam' },
];

class Address extends Component {
  static navigationOptions = () => ({
    header: null,
    // title: 'Where are you going?',
    // headerBackTitle: null,
  })

  constructor(props) {
    super(props);

    this.positionSearch = new Animated.Value(-300);
    this.opacitySearch = new Animated.Value(0);
    this.positionLocation = new Animated.Value(300);
    this.opacityLocation = new Animated.Value(0);
    this.scaleLocation = new Animated.Value(0);
    this.yOffset = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.positionSearch, {
        toValue: 0,
        useNativeDriver: true
      }),
      Animated.timing(this.opacitySearch, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.spring(this.positionLocation, {
        toValue: 0,
        tension: 20,
        useNativeDriver: true
      }),
      Animated.timing(this.scaleLocation, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true
      }),
      // Animated.timing(this.opacityLocation, {
      //   toValue: 1,
      //   duration: 100,
      //   useNativeDriver: true
      // })
    ]).start();
  }

  onChangeText = (location) => {
    this.props.requestLocationChanged(location);
  }

  renderLocation = ({ item, index }) => (
    <Location
      item={item}
      index={index}
      onPress={async () => {
        await this.onChangeText(item.name);
        await this.props.navigation.navigate('giveagift');
      }}
    />
  )

  render() {
    const { location } = this.props;
    const filtererLocation = locations.filter((item) => item.name.toLowerCase().indexOf(location.toLowerCase()) >= 0);
    return (
      <View style={styles.container}>

        <Animated.View
          style={{
            opacity: this.opacitySearch,
            padding: 15,
            transform: [{
              translateY: this.positionSearch
            }]
          }}
        >
          <View style={[ config.STYLES.boxShadow, { alignItems: 'center', backgroundColor: '#fff', borderRadius: 3, flexDirection: 'row' }]}>
            <View style={{ backgroundColor: 'transparent', paddingRight: 5, alignItems: 'center', justifyContent: 'center' }}>
              <Icon
                name={Platform.OS === 'android' ? 'arrow-back' : 'keyboard-arrow-left'}
                color={config.COLOR.secondary}
                containerStyle={{ height: 50, width: 40 }}
                size={Platform.OS === 'android' ? 20 : 35}
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            <TextInput
              placeholder="Where are you going?"
              placeholderTextColor="#777"
              onChangeText={this.onChangeText}
              value={location}
              style={styles.input}
              returnKeyType={'done'}
              selectionColor={config.COLOR.primary}
              corlor={config.COLOR.primary}
              underlineColorAndroid="transparent"
            />

            {location.length > 0 &&
              <TouchableOpacity onPress={() => this.props.clearLocation()}>
                <View style={{ width: 50, alignItems: 'center' }}>
                  <Icon
                    name="clear"
                    size={16}
                    color="#fff"
                    containerStyle={{
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      backgroundColor: '#ddd'
                    }}
                  />
                </View>
              </TouchableOpacity>}
          </View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            // opacity: this.opacityLocation,
            transform: [
              { translateY: this.positionLocation },
              { scale: this.scaleLocation }
            ]
          }}
        >
          <ScrollView contentContainerStyle={{ padding: 20 }}>
            {
              // location.length < 2 &&
              // <View style={{ marginBottom: 30 }}>
              //   <Text style={styles.titleSection}>RECENT SEARCHES</Text>
              //   <View
              //     style={{
              //       borderBottomWidth: 1,
              //       borderBottomColor: '#eee',
              //     }}
              //   >
              //     <View style={styles.row}>
              //       <Icon name="access-time" size={18} color="#454545" />
              //       <Text style={styles.textLocation}>Ha Noi, Viet Nam</Text>
              //     </View>
              //   </View>
              // </View>
            }
            <View>
              {location.length < 2 &&
                <Text style={styles.titleSection}>POPULAR DESTINATIONS</Text>}
              <View>
                {filtererLocation.length > 0 ?
                  <FlatList
                    scrollEnabled
                    data={filtererLocation}
                    keyExtractor={item => item.name}
                    removeClippedSubviews={false}
                    renderItem={this.renderLocation}
                  />
                  : <Text>No match address</Text>}
              </View>
            </View>
          </ScrollView>
        </Animated.View>
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
    height: 50,
    flex: 1
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

export default connect(mapStateToProps, { requestLocationChanged, clearLocation })(Address);
