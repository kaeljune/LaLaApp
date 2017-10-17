import React, { Component } from 'react';
import {
	View,
	Text,
	LayoutAnimation,
	TouchableOpacity,
	Platform,
	UIManager,
	StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';
import { COLOR, STYLES } from '../../config/config';

class BoxSelect extends Component {
	constructor(props) {
		super(props);

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental &&
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.isActive !== nextProps.isActive) {
			return true;
		}
		return false;
	}

	componentWillUpdate() {
		LayoutAnimation.spring();
	}


	render() {
		const { color, children, isActive, onActive } = this.props;
		const scale = isActive ? 1 : 0;
		const opacity = isActive ? 1 : 0;
		const top = isActive ? -10 : 0
		const styleBox = [styles.box, { backgroundColor: color }, { top }];

		return (
			<TouchableOpacity
				onPress={onActive}
				style={{ paddingVertical: 10 }}
				activeOpacity={0.9}
			>
				<View style={[styleBox, STYLES.boxShadow]}>
					<Text style={styles.text}>{children}</Text>

					<View
						style={[
							styles.cirle,
							{
								opacity,
								transform: [{ scale }]
							}
						]}
					>
						<Icon
							reverseColor={COLOR.primary}
							name="check"
							size={10}
							color="#fff"
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		height: 150,
		width: 120,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5
	},
	active: {
		top: -10
	},
	text: {
		color: '#fff',
		fontWeight: '600'
	},
	cirle: {
		height: 25,
		width: 25,
		borderRadius: 20,
		borderColor: '#fff',
		backgroundColor: '#000',
		borderWidth: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 10,
	}
});

export default BoxSelect;
