import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';
import { COLOR } from '../../config/config';

class BoxSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			opacity: 0,
			scale: new Animated.Value(0),
			scaleB: new Animated.Value(1),
			top: new Animated.Value(0)
		};
	}

	componentWillReceiveProps(nextProps) {

		Animated.parallel([
			Animated.timing(
				this.state.scale, {
					toValue: nextProps.isActive ? 1 : 0,
					duration: 300
				}
			),	
			Animated.spring(
				this.state.top, {
					toValue: nextProps.isActive ? -15 : 0
				}
			)

		]).start();
	}
		// Animated.spring(

		// 	this.state.scale, {
		// 		toValue: nextProps.isActive ? 1 : 0,
		// 		bounciness: 0
		// 	}
		// ).start();

		// Animated.spring(
		// 		this.state.top, {
		// 			toValue: nextProps.isActive ? -15 : 0
		// 		}
		// 	).start();
		// }

	handlePress = (id) => {
		this.props.onActive(id);
	}

	render() {
		const { color, children, isActive, onActive, id } = this.props;
		const styleBox = [styles.box, { backgroundColor: color }, { top: this.state.top }];
		const opacity = isActive ? 1 : 0;

		return (
			<TouchableOpacity
				onPress={() => this.handlePress(id)}
				style={{ paddingVertical: 10 }}
				activeOpacity={0.9}
			>
				<Animated.View style={styleBox}>
					<Text style={styles.text}>{children}</Text>

					<Animated.View
						style={{
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
							opacity,
							transform: [{ scale: this.state.scale }]

						}}
					>
						<Icon
							reverseColor={COLOR.primary}
							name="check"
							size={10}
							color="#fff"
						/>
					</Animated.View>
				</Animated.View>
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
	}
});

export default BoxSelect;
