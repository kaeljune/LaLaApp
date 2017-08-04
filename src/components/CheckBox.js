import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR } from '../config/config';

class CheckBox extends Component {
	state = { value: this.props.value };

	onPress = () => {
		this.setState(prevState => ({ value: !prevState.value }));
	}

	render() {
		const { value } = this.state;
		const { reverse, text } = this.props;
		const container = reverse ? 
			[styles.containerCheckbox, { flexDirection: 'row-reverse' }] : 
			[styles.containerCheckbox, { flexDirection: 'row' }];
		const checkbox = value ? 
			[styles.checkbox, { borderColor: COLOR.primary }] : 
			[styles.checkbox, { borderColor: '#ddd' }];
		const wrapText = reverse ? 
			[styles.wrapText] : 
			[styles.wrapText, { marginLeft: 15 }];

		return (
			<TouchableOpacity
				style={container}
				onPress={this.onPress}
				activeOpacity={1}
			>
				<View style={{ flex: 1 }}>
					<View style={checkbox}>
						{value && <Icon name='check' color={COLOR.primary} size={20} />}
					</View>
				</View>
				<View style={{ flex: 9 }} >
					<Text style={wrapText}>{text}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	containerCheckbox: {
		flexDirection: 'row-reverse',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		padding: 10,
		alignItems: 'center'
	},
	checkbox: {
		height: 25,
		width: 25,
		borderWidth: 1,
		borderRadius: 3
	},
	wrapText: {
		lineHeight: 25
	}
});

export default CheckBox;
