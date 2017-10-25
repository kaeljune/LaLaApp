import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Animated,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import TextField from '../../components/TextField';
import Btn from '../../components/Btn';

import logo from '../../../assets/images/logo.png';
import {
	COLOR,
	WIDTH_SCREEN,
	headerStyle,
	headerTitleStyle
} from '../../config/config';

class ForgotScreen extends Component {
	static navigationOptions = () => ({
		title: 'Reset Password',
		headerTintColor: COLOR.secondary,
		headerBackTitle: null,
		headerTitleStyle,
		headerStyle,
	})

	state = {
		email: '',
		animation: {
			positionTop: new Animated.Value(-100),
			positionBottom: new Animated.Value(100)
		}
	};

	componentDidMount() {
		Animated.parallel([
			Animated.spring(this.state.animation.positionTop, {
				toValue: 0,
				useNativeDriver: true
			}),
			Animated.spring(this.state.animation.positionBottom, {
				toValue: 0,
				useNativeDriver: true
			})
		]).start();
	}

	onSignUp = () => {
		this.props.navigation.navigate('signup');
	}

	render() {
		const { email } = this.state;
		const { container, logoStyle, desStyle } = styles;
		return (
			<View style={container}>
				<Animated.View
					style={[
						styles.section,
						{
							alignItems: 'center',
							transform: [{ translateY: this.state.animation.positionTop }]
						}
					]}
				>
					<Image source={logo} style={logoStyle} />
					<Text style={desStyle}>
						Can't sign in? Forget your password?
						Enter your email address below and we'll help log you in
					</Text>
				</Animated.View>

				<Animated.View
					style={[
						styles.section,
						{
							transform: [{ translateY: this.state.animation.positionBottom }]
						}
					]}
				>
					<View style={{ width: WIDTH_SCREEN - 40 }}>
						<TextField
							label="EMAIL"
							value={email}
							placeholder="What's your email?"
							keyboardType="email-address"
            	returnKeyType="done"
							onChangeText={(text) => this.setState({ email: text })}
						/>
					</View>

				</Animated.View >

				<Animated.View
					style={[
						styles.section,
						{
							transform: [{ translateY: this.state.animation.positionBottom }]
						}
					]}
				>
					<View >
						<Btn
							title="REQUEST"
							style={{ width: 150 }}
							bgColor={COLOR.primary}
							onPress={this.onButtonPress}
						/>
						<Text style={{ marginVertical: 15, textAlign: 'center' }}>Or sign in with</Text>
						<Btn
							title="FACEBOOK"
							style={{ width: 150 }}
							bgColor="#3B5998"
							onPress={() => { alert('loginface'); }}
						/>

						<TouchableOpacity onPress={this.onSignUp}>
							<View style={{ flexDirection: 'row', marginTop: 20 }}>
								<Text style={{ color: '#95989A' }}>Do not have an account? </Text>
								<Text style={{ fontWeight: '700', color: COLOR.primary }}>
									Sign up
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					</Animated.View >
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		backgroundColor: '#f8f8f8'
	},
	section: {
		alignItems: 'center'
	},
	logoStyle: {
		marginVertical: 20
	},
	wrapButtons: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	desStyle: {
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '300',
		backgroundColor: 'transparent',
		width: WIDTH_SCREEN * 0.75,
		lineHeight: 25
	},
	textStyle: {
		textAlign: 'center',
	},
	labelStyle: {
		fontWeight: '300',
		color: COLOR.primaryFont
	}
});

export default ForgotScreen;
