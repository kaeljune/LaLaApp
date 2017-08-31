import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import _ from 'lodash';

import { accountFetch, navLogin, navLogout } from '../../actions';
import { COLOR, WIDTH_SCREEN, HEIGHT_SCREEN } from '../../config/config';

class SplashScreen extends Component {
<<<<<<< HEAD
    state = {
        userLogin: null,
        isLogin: null
    };
    async componentWillMount() {
        //await AsyncStorage.removeItem('reduxPersist:fetchAcc');
        await this.props.accountFetch();
        const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
        if (JSON.parse(fetchAcc).isLogin) {
            await this.setState({ isLogin: JSON.parse(fetchAcc).isLogin });
        } else {
            await this.setState({ isLogin: false });
        }
    }
=======
	static navigationOptions = {
		header: null
	}
	state = {
		userLogin: null,
		isLogin: null,
	
		scale1: new Animated.Value(1),
		scale2: new Animated.Value(1),
		scale3: new Animated.Value(1),
	};
	async componentWillMount() {
		//await AsyncStorage.removeItem('reduxPersist:fetchAcc');
		await this.props.accountFetch();
		const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
		if (JSON.parse(fetchAcc).isLogin) {
			this.setState({ isLogin: JSON.parse(fetchAcc).isLogin });
		} else {
			this.setState({ isLogin: false });
		}
	}

	componentDidMount() {	
		Animated.loop(
			Animated.parallel([
				Animated.sequence([
					Animated.timing(this.state.scale1, {
						toValue: 0.9,
						duration: 1000
					}),
					Animated.timing(this.state.scale1, {
						toValue: 1,
						duration: 1100
					})
				]),

				Animated.sequence([
					Animated.timing(this.state.scale2, {
						toValue: 0.85,
						duration: 1050
					}),
					Animated.timing(this.state.scale2, {
						toValue: 1,
						duration: 1150
					})
				]),

				Animated.sequence([
					Animated.timing(this.state.scale3, {
						toValue: 0.8,
						duration: 1100
					}),
					Animated.timing(this.state.scale3, {
						toValue: 1,
						duration: 1200
					})
				])
			])
		).start();
	}

>>>>>>> 57f8868fa9e13510e8151e9b164d805b141314ce
	render() {
		const animateStyle = {
			transform: [
				{ scale: this.state.scale }
			]
		};

		const animateStyle1 = {
			transform: [
				{ scale: this.state.scale1 }
			]
		};
		const animateStyle2 = {
			transform: [
				{ scale: this.state.scale2 }
			]
		};
		const animateStyle3 = {
			transform: [
				{ scale: this.state.scale3 }
			]
		};

		if (_.isNull(this.state.isLogin)) {
			return <AppLoading />;
		}
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
<<<<<<< HEAD
    const { account } = fetchAcc;
    return { account };
  };
=======
	const { account } = fetchAcc;
	return { account };
};
>>>>>>> 57f8868fa9e13510e8151e9b164d805b141314ce

export default connect(mapStateToProps, { accountFetch, navLogin, navLogout })(SplashScreen);
