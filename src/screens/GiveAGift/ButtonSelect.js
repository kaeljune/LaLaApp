import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLOR, STYLES } from '../../config/config';

class ButtonSeclect extends PureComponent {
	render() {
		const { isActive, onActive, children, id } = this.props;
		const styleBtn = isActive ? [styles.normal, styles.active, STYLES.boxShadow] : styles.normal;
		const styleText = isActive ? [styles.text, { color: '#fff'}] : [styles.text, { color: '#555' }];
		return (
			<TouchableOpacity onPress={() => onActive(id)}>
				<View style={styleBtn}>
					<Text style={styleText}>{children}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	normal: {
		borderWidth: 1,
		backgroundColor: '#fff',
		borderColor: '#eee',
		marginHorizontal: 5,
		marginVertical: 15,
		paddingVertical: 10,
		paddingHorizontal: 15,
		minWidth: 70,
	},
	active: {
		backgroundColor: COLOR.primary,
		borderColor: COLOR.primary
	},
	text: {
		fontWeight: '600',
		fontSize: 12,
		textAlign: 'center',
	}
});

export default ButtonSeclect;
