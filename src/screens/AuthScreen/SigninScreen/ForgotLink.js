import React from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

const ForgotLink = (props) =>
	<TouchableOpacity onPress={props.onForgot}>
		<View style={styles.containerStyle}>
			<Icon
				name='info-outline'
				color="#999"
				size={20}
			/>
			<Text
				style={styles.textStyle}
			>
				Forgot password?
			</Text>
		</View>
	</TouchableOpacity>;

const styles = StyleSheet.create({
	containerStyle: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginBottom: 30,
		alignItems: 'center'
	},
	textStyle: {
		color: '#858585',
		fontSize: 14,
		fontWeight: '300',
		marginLeft: 5
	}
});

export default ForgotLink;
