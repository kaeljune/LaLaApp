import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	KeyboardAvoidingView,
	TextInput, Slider,
	StyleSheet
} from 'react-native';
import { Button, Icon } from 'react-native-elements';

import ButtonSeclect from './ButtonSelect';

import avatar from '../../../assets/images/avatar.png';

class GiftSelection extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Gift selection',
		headerLeft: <Icon
			name='chevron-left'
			color='#11b8ab'
			onPress={() => navigation.goBack()}
		/>,
		headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
			<Icon
				size={15}
				name='create'
				color='#11b8ab'
				onPress={() => navigation.goBack()}
			/>
			<Text style={{ marginLeft: 5 }}>Edit</Text>
		</View>
	})
	render() {
		const { section, sectionItem, sectionPad } = styles;
		return (
			<ScrollView style={{ padding: 15, flex: 1 }}>
				<KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
					<View style={section}>
						<View style={sectionItem}>
							<Image style={{ width: 100, height: 100, marginBottom: 15 }} source={avatar} />
							<Text>Hai Nguyen</Text>
						</View>
						<View style={sectionItem}>
							<ScrollView horizontal>
								<ButtonSeclect>FeMale</ButtonSeclect>
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

					<View style={sectionPad}>
						<Text style={{ textAlign: 'center' }}>Location</Text>
						<View>
							<TextInput
								style={{
									height: 60
								}}
								placeholder="Location..."
							/>
						</View>
					</View>

					<View style={section}>
						<Text style={{ textAlign: 'center', margin: 15 }}>Occasion</Text>

						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<View
								style={{
									height: 120,
									width: 120,
									borderRadius: 3,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									backgroundColor: 'pink',
									alignItems: 'center',
									margin: 7
								}}
							>
								<Text>
									Anniversary
							</Text>
							</View>
							<View
								style={{
									height: 120,
									width: 120,
									borderRadius: 3,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									backgroundColor: 'pink',
									alignItems: 'center',
									margin: 7
								}}
							>
								<Text>
									Anniversary
							</Text>
							</View>
							<View
								style={{
									height: 120,
									width: 120,
									borderRadius: 3,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									backgroundColor: 'pink',
									alignItems: 'center',
									margin: 7
								}}
							>
								<Text>
									Anniversary
							</Text>
							</View>
						</ScrollView>
					</View>

					<View style={sectionPad}>
						<Text style={{ textAlign: 'center' }}>Price</Text>

						<Text
							style={{
								fontSize: 20,
								marginTop: 30,
								marginBottom: 15,
								textAlign: 'center'
							}}
						>$200-500</Text>

						<Slider minimumValue={0} maximumValue={100} />
					</View>

					<View style={sectionPad}>
						<Text style={{ textAlign: 'center' }}>Recipient's Intersts</Text>

						<View
							style={{
								marginTop: 30,
								marginBottom: 15,
								flexDirection: 'row',
								flexWrap: 'wrap',
								justifyContent: 'center'
							}}
						>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Dog</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Dog</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>DIY</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Cat</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Tea</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Coffee</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Fitness</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5

								}}
							>Cat</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Tea</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Sport</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Science</Text>

						</View>
					</View>

					<View style={sectionPad}>
						<Text style={{ textAlign: 'center' }}>Recipient's Style</Text>

						<View
							style={{
								marginTop: 30,
								marginBottom: 15,
								flexDirection: 'row',
								flexWrap: 'wrap',
								justifyContent: 'center'
							}}
						>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Dog</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Dog</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>DIY</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Cat</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Tea</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Coffee</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Fitness</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5

								}}
							>Cat</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Tea</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Sport</Text>
							<Text
								style={{
									padding: 7,
									minWidth: 60,
									textAlign: 'center',
									borderColor: '#eee',
									borderWidth: 1,
									borderRadius: 20,
									margin: 5
								}}
							>Science</Text>

						</View>
					</View>

					<View style={sectionPad}>
						<Text style={{ textAlign: 'center' }}>Other interests or thoughts optional</Text>
						<View>
							<TextInput
								style={{
									height: 60
								}}
								placeholder="Location..."
							/>
						</View>
					</View>

					<View
						style={{
							marginBottom: 50
						}}
					>
						<Button
							onPress={() => console.log(123)}
							title="SUBMIT REQUESTS"
							backgroundColor="#11B8AB"
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
	sectionPad: {
		backgroundColor: '#fff', padding: 15, marginBottom: 15
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
	}
});

export default GiftSelection;
