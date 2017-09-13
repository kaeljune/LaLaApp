import React, { Component } from 'react';
import { 
	View,
	Text, 
	Animated, 
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
		this.state = {
			id: this.props.id,
			opacity: 0,
			scale: 0,
			top: 0
		};

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && 
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			opacity: nextProps.isActive ? 1 : 0,
			top: nextProps.isActive ? -10 : 0
		});
	}
	
	componentWillUpdate() {	
		LayoutAnimation.spring();	
	}

	handlePress = (id) => {
		this.props.onActive(id);
	}

	render() {
		const { color, children, isActive, id } = this.props;
		const styleBox = [styles.box, { backgroundColor: color }, { top: this.state.top }];
		const opacity = isActive ? 1 : 0;

		return (
			<TouchableOpacity
				onPress={() => this.handlePress(id)}
				style={{ paddingVertical: 10 }}
				activeOpacity={0.9}
			>
				<Animated.View style={[styleBox, STYLES.boxShadow]}>
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
