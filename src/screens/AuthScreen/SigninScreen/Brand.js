import React, { PureComponent } from 'react';
import {
	Text,
	Image,
	StyleSheet,
	Animated
} from 'react-native';


import logo from '../../../../assets/images/logo.png';
import { WIDTH_SCREEN, COLOR } from '../../../config/config';

class Brand extends PureComponent {
	constructor(props) {
		super(props);

		this.translate1Y = new Animated.Value(-200);
	}

	componentDidMount() {
		Animated.spring(this.translate1Y, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true
		}).start();
	}

	render() {
		const { container, logoStyle, desStyle } = styles;
		return (
			<Animated.View style={[container, { transform: [{ translateY: this.translate1Y }] }]}>
				<Image source={logo} style={logoStyle} />
				<Text style={desStyle}>
					Empowering global artisans &amp; small businesses by artificial intelligent
        </Text>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLOR.background,
		alignItems: 'center'
	},
	logoStyle: {
		marginTop: 30,
	},
	desStyle: {
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '400',
		backgroundColor: 'transparent',
		width: WIDTH_SCREEN * 0.75,
		lineHeight: 25,
		marginTop: 10,
		marginBottom: 30,
	},
});

export default Brand;
