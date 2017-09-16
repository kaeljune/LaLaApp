import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { COLOR, STYLES } from '../../config/config';

function ButtonSeclect(props) {
	const styleBtn = props.isActive ? [styles.normal, styles.active, STYLES.boxShadow] : styles.normal;
	return (

		<Text style={styleBtn} onPress={() => props.onActive(props.id)} >
			{props.children.toUpperCase()}
		</Text>

	)
}

const styles = StyleSheet.create({
	normal: {
		borderWidth: 1,
		backgroundColor: '#fff',
		borderColor: '#eee',
		fontWeight: '600',
		fontSize: 11,
		color: '#555',
		margin: 5,
		paddingVertical: 10,
		paddingHorizontal: 15,
		minWidth: 70,
		textAlign: 'center',
	},
	active: {
		backgroundColor: COLOR.primary,
		color: '#fff',
		borderColor: COLOR.primary
	}
});

export default ButtonSeclect;
