import React from 'react';
import { Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { 
  description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { 
  description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

const GooglePlacesInput = () => (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
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
        textInputContainer: {
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: 38,
          color: '#5d5d5d',
          fontSize: 16
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },
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
