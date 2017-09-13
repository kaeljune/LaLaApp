import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { COLOR, STYLES } from '../../config/config';

class TagSelect extends Component {
	state = {
		active: false
	}
	onPress = () => {
		this.setState(prevState => ({ active: !prevState.active }));
	}
	render() {
		const styleTag = this.state.active ? [styles.tag, styles.active, STYLES.boxShadow] : [styles.tag];
		return (

			<Text style={styleTag} onPress={this.onPress}>
				{this.props.children}
			</Text>

		);
	}
}

const styles = StyleSheet.create({
	tag: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		minWidth: 50,
		textAlign: 'center',
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

