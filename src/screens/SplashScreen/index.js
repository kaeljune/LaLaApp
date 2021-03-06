import React, { PureComponent } from 'react';
import { View, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { connect } from 'react-redux';

import { fetchRequest, accountFetch, navLogin, navLogout } from '../../actions';
import { COLOR } from '../../config/config';

class SplashScreen extends PureComponent {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		// this.state = {
		// 	userLogin: null,
		// 	isLogin: null,
		// };
		this.scale1 = new Animated.Value(1);
		this.scale2 = new Animated.Value(1);
		this.scale3 = new Animated.Value(1);
	}

	async componentWillMount() {
		// await AsyncStorage.removeItem('reduxPersist:listRequest');
		await this.props.accountFetch();
		//await this.props.fetchRequest();
	}

	componentDidMount() {
		Animated.loop(
			Animated.parallel([
				Animated.sequence([
					Animated.timing(this.scale1, {
						toValue: 0.9,
						duration: 1000,
						useNativeDriver: true
					}),
					Animated.timing(this.scale1, {
						toValue: 1,
						duration: 1100,
						useNativeDriver: true
					})
				]),

				Animated.sequence([
					Animated.timing(this.scale2, {
						toValue: 0.85,
						duration: 1050,
						useNativeDriver: true
					}),
					Animated.timing(this.scale2, {
						toValue: 1,
						duration: 1150,
						useNativeDriver: true
					})
				]),

				Animated.sequence([
					Animated.timing(this.scale3, {
						toValue: 0.8,
						duration: 1100,
						useNativeDriver: true
					}),
					Animated.timing(this.scale3, {
						toValue: 1,
						duration: 1200,
						useNativeDriver: true
					})
				])
			])
		).start();
	}

	render() {
		const animateStyle1 = {
			transform: [
				{ scale: this.scale1 }
			]
		};
		const animateStyle2 = {
			transform: [
				{ scale: this.scale2 }
			]
		};
		const animateStyle3 = {
			transform: [
				{ scale: this.scale3 }
			]
		};

		return (
			<View style={styles.container}>

				<View style={{ width: 150, height: 150 }}>
					<Animated.View
						style={[
							styles.cirle,
							animateStyle1,
							{ width: 150, height: 150, borderRadius: 150, top: 0, left: 0 }
						]}
					/>
					<Animated.View
						style={[
							styles.cirle,
							animateStyle2,
							{ width: 120, height: 120, borderRadius: 100, top: 15, left: 15 }
						]}
					/>
					<Animated.View
						style={[
							styles.cirle,
							animateStyle3,
							{ width: 90, height: 90, borderRadius: 60, top: 30, left: 30 }
						]}
					/>
					<View
						style={{
							backgroundColor: '#fff',
							height: 30,
							width: 30,
							borderRadius: 30,
							justifyContent: 'center',
							position: 'absolute',
							top: 60,
							left: 60,
							elevation: 2
						}}
					>
						<ActivityIndicator
							color={COLOR.primary}
						/>
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLOR.primary,
	},

	cirle: {
		position: 'absolute',
		borderRadius: 100,
		backgroundColor: '#fff',
		elevation: 2,
		opacity: 0.3
	},

	text: {
		fontWeight: '100',
		fontSize: 16,
		marginTop: 100,
		color: '#fff',
		position: 'relative',
		zIndex: 100
	}
});

const mapStateToProps = ({ fetchAcc }) => {
	const { account } = fetchAcc;
	return { account };
};

export default connect(mapStateToProps, { accountFetch, fetchRequest, navLogin, navLogout })(SplashScreen);
