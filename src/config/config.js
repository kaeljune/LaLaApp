import { Dimensions } from 'react-native';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;
const HEIGHT_HEADER = (HEIGHT_SCREEN * 50) / 667;

const COLOR = {
    primary: '#11B8AB',
    secondary: '#FF5700',
};

const headerTitleStyle = {
    fontSize: 17,
};
const headerStyle = {
    paddingTop: 'auto',
    height: HEIGHT_HEADER,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
};

export { WIDTH_SCREEN, HEIGHT_SCREEN, HEIGHT_HEADER, COLOR, headerTitleStyle, headerStyle };
