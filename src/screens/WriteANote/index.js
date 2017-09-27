import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Avatar } from 'react-native-elements';

import { cartMessageChanged } from '../../actions';
import Btn from '../../components/Btn';
import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';
import avatar from '../../../assets/images/avatar.png';

class WriteANote extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Write a Note',
		headerStyle,
		headerTitleStyle,
		// headerLeft: <Icon
		//     name='chevron-left'
		//     color='#11b8ab'
		//     onPress={() => navigation.goBack()}
		// />
	})

	state = {
		transformY: new Animated.Value(100)
	}
	componentDidMount() {
		Animated.spring(this.state.transformY, {
			toValue: 0,
		}).start();
	}
	
	onMessageChange = (text) => {
    this.props.cartMessageChanged(this.props.cardActive, text);
  }
	render() {
		return (
			<View style={styles.wraper}>
				<View style={styles.sectionContainer}>
					<Animated.View
						style={{
							alignItems: 'center',
							transform: [{ translateY: this.state.transformY }]
						}}
					>
					<View style={styles.sectionHead}>
						<Avatar
							height={120}
							width={120}
							rounded
							containerStyle={{ marginBottom: 15 }}
							title={this.props.navigation.state.params.avaTitle}
						/>
						<Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>{this.props.navigation.state.params.user.receiverName}</Text>
						<Text>for {this.props.navigation.state.params.user.occasion}</Text>
					</View>

					
						<View
							style={{
								zIndex: 2,
								justifyContent: 'center',
								width: 35,
								height: 35,
								backgroundColor: '#FF5700',
								borderRadius: 20
							}}
						>
							<Icon
								size={15}
								name='assignment'
								color='#fff'
							/>

						</View>

						<View
							style={{
								top: -17,
								padding: 15,
								width: WIDTH_SCREEN - 60,
								alignItems: 'center',
								backgroundColor: '#fff',
								borderColor: '#eee',
								borderWidth: 1
							}}
						>
							<Text style={{ color: '#11b8ab', marginTop: 30 }}>HANDWRITTEN NOTE</Text>
							<TextInput
								multiline
								style={{ textAlign: 'center', width: WIDTH_SCREEN - 90 }}
								numberOfLines={10}
								underlineColorAndroid="transparent"
								value={this.props.message}
								onChangeText={this.onMessageChange}
								placeholder="Why are you giving this gift?"
							/>
						</View>
					</Animated.View>
				</View>

				<View style={{ flex: 1 }}>

					<Btn
						title="NEXT"
						style={{ width: 150 }}
						bgColor={COLOR.primary}
						onPress={() => this.props.navigation.navigate('afterrequest')}
					/>
				</View>


			</View>
		);
	}
}

const styles = StyleSheet.create({
	wraper: {
		flex: 1,
		backgroundColor: '#f8f8f8'
	},
	sectionContainer: {
		alignItems: 'center',
	},
	sectionHead: {
		padding: 15,
		width: WIDTH_SCREEN,
		alignItems: 'center'
	},
});

const mapStateToProps = state => {
	const cardActive = state.listRequest.cardActive;
	const message = state.listRequest.cart[cardActive].message || '';
	return { cardActive, message };
};

export default connect(mapStateToProps, 
{ cartMessageChanged })(WriteANote);
