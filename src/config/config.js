import { Dimensions, Platform, StyleSheet } from 'react-native';

const RootAPI = 'https://us-central1-airlala-7b1b2.cloudfunctions.net';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;
const HEIGHT_HEADER = (HEIGHT_SCREEN * 50) / 667;

const COLOR = {
	primary: '#11B8AB',
	secondary: '#FF5700',
	primaryFont: '#313131',
	secondaryFont: '#FFFFFF',
	placeholderFont: '#A8A8A8',
	background: '#F8F8F8',
};

const spaceNumber = 15;

const headerTitleStyle = {
	fontSize: 17,
	// alignSelf: 'center',
	color: '#313113'
};
const headerStyle = {
	paddingTop: 'auto',
	// paddingHorizontal: 10,
	// height: HEIGHT_HEADER,
	justifyContent: 'center',

};

const headerOverlay =  {
	backgroundColor: 'rgba(255,255,255,.9)',
	position: 'absolute',
	height: HEIGHT_HEADER,
	top: 0,
	right: 0,
	left: 0, 
	zIndex: 9999
};

const STYLES = StyleSheet.create({
	boxShadow: {
		...Platform.select({
			ios: {
				shadowColor: 'rgba(0,0,0, .7)',
				shadowOffset: { height: 0, width: 0 },
				shadowOpacity: 1,
				shadowRadius: 3,
			},
			android: {
				elevation: 3
			},
		}),
	}
});

const API_URL = 'https://us-central1-airlala-7b1b2.cloudfunctions.net/';

export {
	STYLES,
	API_URL, WIDTH_SCREEN, HEIGHT_SCREEN, HEIGHT_HEADER, COLOR, spaceNumber,
	headerTitleStyle, headerStyle, headerOverlay,
	RootAPI
};
