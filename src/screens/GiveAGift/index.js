import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	KeyboardAvoidingView,
	TextInput,
	StyleSheet
} from 'react-native';
import { Avatar, Icon, Slider } from 'react-native-elements';
import { COLOR } from '../../config/config';

import Btn from '../../components/Btn';
import ButtonSeclect from './ButtonSelect';
import TagSelect from './TagSelect';
import BoxSelect from './BoxSelect';
import avatar from '../../../assets/images/avatar.png';

class GiftSelection extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Give a Gifts',
		headerStyle: {
			paddingLeft: 5
		},
		headerTitleStyle: {
			alignSelf: 'center'
		},
		headerLeft: <Icon
			name='chevron-left'
			color={COLOR.primary}
			onPress={() => navigation.goBack()}
		/>,
		headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
			<Icon
				size={15}
				name='create'
				color={COLOR.primary}
				onPress={() => navigation.goBack()}
			/>
			<Text style={{ marginLeft: 5 }}>Edit</Text>
		</View>
	})
	render() {
		const { section, sectionItem, sectionPad, sectionTag, sectionTitle } = styles;
		return (
			<ScrollView contentContainerStyle={{ padding: 15 }}>
				<KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
					<View style={section}>
						<View style={sectionItem}>
							<Avatar
								height={120}
								width={120}
								rounded
								source={avatar}
							/>

							<Text style={{ marginTop: 15, fontSize: 18, fontWeight: '600' }}>Hai Nguyen</Text>
						</View>
						<View style={sectionItem}>
							<ScrollView horizontal>
								<ButtonSeclect>Female</ButtonSeclect>
								<ButtonSeclect>Male</ButtonSeclect>
								<ButtonSeclect>Other</ButtonSeclect>
							</ScrollView>
						</View>

						<View style={sectionItem}>
							<ScrollView horizontal showsHorizontalScrollIndicator={false}>
								<ButtonSeclect>1-3</ButtonSeclect>
								<ButtonSeclect>4-6</ButtonSeclect>
								<ButtonSeclect>7-9</ButtonSeclect>
								<ButtonSeclect>10-12</ButtonSeclect>
								<ButtonSeclect>13-15</ButtonSeclect>
								<ButtonSeclect>16-18</ButtonSeclect>
							</ScrollView>
						</View>

						<View
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
								paddingTop: 15,
								paddingBottom: 15
							}}
						>
							<ScrollView horizontal showsHorizontalScrollIndicator={false}>
								<ButtonSeclect>Professional</ButtonSeclect>
								<ButtonSeclect>Friend</ButtonSeclect>
								<ButtonSeclect>Spouse / Partner</ButtonSeclect>
								<ButtonSeclect>Professional</ButtonSeclect>
								<ButtonSeclect>Friend</ButtonSeclect>
								<ButtonSeclect>Spouse / Partner</ButtonSeclect>
								<ButtonSeclect>Professional</ButtonSeclect>
								<ButtonSeclect>Friend</ButtonSeclect>
							</ScrollView>
						</View>
					</View>

					{/* <View style={sectionPad}>
						<Text style={sectionTitle}>Location</Text>
						<View>
							<TextInput
								style={{
									height: 60,
									textAlign: 'center'
								}}
								placeholder="Location..."
							/>
						</View>
					</View> */}

					<View style={section}>
						<Text style={[sectionTitle, { margin: 15 }]}>Occasion</Text>

						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<BoxSelect color="#FF3D7F">Anniversary</BoxSelect>
							<BoxSelect color="#B23DFF">Apology</BoxSelect>
							<BoxSelect color="#B1068F">Baby</BoxSelect>
							<BoxSelect color="#FF3D7F">Anniversary</BoxSelect>
							<BoxSelect color="#B23DFF">Apology</BoxSelect>
							<BoxSelect color="#B1068F">Baby</BoxSelect>
						</ScrollView>
					</View>

					<View style={sectionPad}>
						<Text style={sectionTitle}>Price</Text>

						<Text
							style={{
								fontSize: 20,
								marginTop: 30,
								marginBottom: 15,
								textAlign: 'center'
							}}
						>$200-500</Text>

						<Slider 	
							minimumValue={0} 
							maximumValue={100} 
							minimumTrackTintColor={COLOR.primary}
							maximumTrackTintColor='#eee'
							thumbTintColor={COLOR.primary}
							thumbTouchSize={{
								width: 100,
								height: 100,
							}}
							thumbStyle={{
								borderColor: '#fff',
								borderWidth: 2
							}}
							
						/>
					</View>

					<View style={sectionPad}>
						<Text style={sectionTitle}>Recipient's Intersts</Text>

						<View style={sectionTag}>
							<TagSelect>Dog</TagSelect>
							<TagSelect>DIY</TagSelect>
							<TagSelect>Cat</TagSelect>
							<TagSelect>Tea</TagSelect>
							<TagSelect>Coffee</TagSelect>
							<TagSelect>Fitness</TagSelect>
							<TagSelect>Cat</TagSelect>
							<TagSelect>Tea</TagSelect>
							<TagSelect>Sport</TagSelect>
							<TagSelect>Science</TagSelect>

						</View>
					</View>

					<View style={sectionPad}>
						<Text style={sectionTitle}>Recipient's Style</Text>

						<View style={sectionTag}>
							<TagSelect>Dog</TagSelect>
							<TagSelect>DIY</TagSelect>
							<TagSelect>Cat</TagSelect>
							<TagSelect>Tea</TagSelect>
							<TagSelect>Coffee</TagSelect>
							<TagSelect>Fitness</TagSelect>
							<TagSelect>Cat</TagSelect>
							<TagSelect>Tea</TagSelect>
							<TagSelect>Sport</TagSelect>
							<TagSelect>Science</TagSelect>

						</View>
					</View>

					<View style={sectionPad}>
						<Text style={sectionTitle}>Other interests or thoughts optional</Text>
						<View>
							<TextInput
								style={{
									height: 60,
									paddingLeft: 3,
									textAlign: 'center'
								}}
								underlineColorAndroid={'transparent'}
								multiline
								placeholder="Dogs, going the beach, pampering, barware, etc"
							/>
						</View> 
					</View>

					<View style={{ marginVertical: 30 }}>
						<Btn 
							title="SUBMIT REQUESTS"
							bgColor="#11b8ab"
							onPress={this.props.onPress}
						/>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	section: {
		backgroundColor: '#fff',
		marginBottom: 15
	},
	avatarStyle: {
		flexDirection: 'row', 
		alignItems: 'center', 
		paddingRight: 15 
	},
	sectionPad: {
		backgroundColor: '#fff', 
		padding: 15, 
		marginBottom: 15
	},

	sectionTitle: {
		textAlign: 'center',
		color: '#636363',
		fontWeight: '600'
	},

	sectionItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
		width: '100%',
		paddingTop: 15,
		paddingBottom: 15
	},

	sectionTag: {
		marginTop: 30,
		marginBottom: 15,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	btn: {
		backgroundColor: COLOR.primary,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
	}
});

export default GiftSelection;
