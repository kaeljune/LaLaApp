import { Dimensions, Platform, StyleSheet, LayoutAnimation } from 'react-native';

const RootAPI = 'https://us-central1-airlala-7b1b2.cloudfunctions.net';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;
// const HEIGHT_HEADER = (HEIGHT_SCREEN * 50) / 667;
const HEIGHT_HEADER = 60

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
	height: HEIGHT_HEADER,
	// justifyContent: 'center',
	backgroundColor: '#fff'
};

const headerOverlay =  {
	backgroundColor: 'rgba(255,255,255,0.8)',
	position: 'absolute',
	height: HEIGHT_HEADER,
	paddingTop: 'auto',
	top: 0,
	right: 0,
	left: 0,
	zIndex: 9999
};

const STYLES = StyleSheet.create({
	boxShadow: {
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
	}
});

const CustomLayoutSpring = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7,
  },
};

const API_URL = 'https://us-central1-airlala-7b1b2.cloudfunctions.net/';

export {
	STYLES,
	API_URL, WIDTH_SCREEN, HEIGHT_SCREEN, HEIGHT_HEADER, COLOR, spaceNumber,
	headerTitleStyle, headerStyle, headerOverlay,
	RootAPI, CustomLayoutSpring
};
