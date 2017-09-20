import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR, STYLES } from '../../config/config';

class TagSelect extends PureComponent {
	state = {
		active: false
	}
	render() {
		const styleTag = this.state.active ? [styles.tag, styles.active, STYLES.boxShadow] : [styles.tag];
		return (
			<TouchableOpacity onPress={() => this.setState(prevState => ({ active: !prevState.active }))}>
			<View style={styleTag}>
				<Text>
					{this.props.children}
				</Text>
			</View>
			</TouchableOpacity>

		);
	}
}

const styles = StyleSheet.create({
	tag: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		minWidth: 50,
		borderColor: '#eee',
		borderWidth: 1,
		borderRadius: 20,
		backgroundColor: '#fff',
		margin: 5
	},
	active: {
		borderColor: COLOR.primary,
		color: COLOR.primary
	}
});

export default TagSelect;

