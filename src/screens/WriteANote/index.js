import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Avatar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { cartMessageChanged } from '../../actions';
import Btn from '../../components/Btn';
import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';
import avatar from '../../../assets/images/avatar.png';

class WriteANote extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Write a Note',
		headerTintColor: COLOR.primary,
		headerStyle,
		headerTitleStyle,
	})

	onMessageChange = (text) => {
		this.props.cartMessageChanged(this.props.cardActive, text);
	}

	render() {
		const { avaTitle, user } = this.props.navigation.state.params;

		return (
			<View style={styles.wraper}>
				<KeyboardAwareScrollView>
					<View style={styles.sectionContainer}>
						<View
							style={{
								alignItems: 'center',
							}}
						>
							<View style={styles.sectionHead}>
								<Avatar
									height={120}
									width={120}
									rounded
									title={avaTitle}
								/>
								<Text style={{ fontSize: 18, fontWeight: '600', marginVertical: 20 }}>{user.receiverName.length > 0 ? user.receiverName : 'Anonymous'}</Text>
								<Text>for {user.occasion}</Text>
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
									top: -20,
									padding: 10,
									width: WIDTH_SCREEN - 60,
									alignItems: 'center',
									backgroundColor: '#fff',
									borderColor: '#eee',
									borderWidth: 1
								}}
							>
								<Text style={{ color: '#11b8ab', marginVertical: 20 }}>HANDWRITTEN NOTE</Text>
								<View
									style={{
										borderStyle: 'dashed',
										borderColor: '#eee',
										borderWidth: 1,
										paddingVertical: 15,
									}}
								>
									<TextInput
										multiline
										style={{
											textAlign: 'center',
											width: WIDTH_SCREEN - 90,
											minHeight: 60,
											fontSize: 16,
											paddingVertical: 15,
										}}
										underlineColorAndroid="transparent"
										value={this.props.message}
										onChangeText={this.onMessageChange}
										placeholder="Why are you giving this gift?"
										placeholderTextColor="#ddd"
									/>
								</View>
							</View>
						</View>
					</View>

					<View style={{ flex: 1 }}>
						<Btn
							title="NEXT"
							style={{ width: 150 }}
							bgColor={COLOR.primary}
							onPress={() => this.props.navigation.navigate('deliveryblank')}
						/>
					</View>
				</KeyboardAwareScrollView>
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
