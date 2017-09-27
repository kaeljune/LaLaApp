import React from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import * as config from '../../config/config';

const homePlace = {
  description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = {
  description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

const GooglePlacesInput = () => (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails
      renderDescription={(row) => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data);
        console.log(details);
      }}
      getDefaultValue={() => '' // text input default value
      }
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyAZNIQ0H6VV3D1Ws2_FN5bPUktFHvc8kRI',
        language: 'en', // language of the results
        types: 'address' // default: 'geocode'
      }}
      styles={{
        container: {
          marginBottom: 20,
          backgroundColor: '#fff',
        },
        textInputContainer: {
          backgroundColor: '#fff',
          marginBottom: 10,
          height: 65,
          borderColor: '#eee',
          borderWidth: 1,
          borderTopWidth: 1,
          borderTopColor: '#eee',
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(0,0,0,0.2)',
              shadowOffset: { height: 5, width: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
            },
            android: {
              elevation: 2
            },
          }),
        },
        textInput: {
          height: 50,
          marginLeft: 0,
          marginRight: 0,
          color: '#313131',
          fontSize: 20,
          borderRadius: 0,
          selectionColor: config.COLOR.primary
        },
        predefinedPlacesDescription: {
          color: '#5d5d5d',
          fontSize: 16,
          margin: 0,
          padding: 0
        },
        separator: {
          backgroundColor: '#ddd',
        }

      }}

      currentLocation // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        //rankby: 'distance',
        //types: 'food'
      }}

      filterReverseGeocodingByTypes={['address']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      //renderLeftButton={() => <Text>LeftButton</Text>}
      //renderRightButton={() => <Text>Custom text after the inputg</Text>}
    />
  );

export default GooglePlacesInput;
