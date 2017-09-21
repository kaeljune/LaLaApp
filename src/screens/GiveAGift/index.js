import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	TextInput,
	Slider,
	StyleSheet,
} from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';
import { Avatar, Icon } from 'react-native-elements';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';
import {
	requestSexChanged,
	requestAgeChanged,
	requestReceiverNameChanged,
	requestRelationshipChanged,
	requestOccasionChanged,
	requestPriceChanged,
	requestInterestChanged,
	requestStyleChanged,
	requestOtherChanged,
	requestGift
} from '../../actions';

import { COLOR, headerStyle, headerTitleStyle } from '../../config/config';

import Spinner from '../../components/Spinner';
import SlideSelect from './SlideSelect';
import SlideBox from './SlideBox';
import Btn from '../../components/Btn';
import TagSelect from './TagSelect';
import TextField from '../../components/TextField';
import avatar from '../../../assets/images/avatar.png';

const sexs = ['Female', 'Male', 'Other'];
const ages = ['0,5', '6,10', '11,15', '15,18', '19,24', '25,34', '35,54', '55,64', '65,150'];
const popular = [
	'Professional',
	'Friend',
	'Partner',
	'Mother',
	'Father',
	'Daughter',
	'Son',
	'Other',
];
const occasions = [
	{ id: 1, text: 'anniversary', color: '#FF3D7F' },
	{ id: 2, text: 'apology', color: '#B23DFF' },
	{ id: 3, text: 'birthday', color: '#B1068F' },
	{ id: 4, text: 'congratulations', color: '#FF3D7F' },
	{ id: 5, text: 'thank you', color: '#B23DFF' },
	{ id: 6, text: 'other', color: '#B1068F' }
];

class GiftSelection extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Find a Local Product',
		headerTintColor: COLOR.secondary,
		headerStyle,
		headerTitleStyle,
	})

	onSexChange = (text) => {
		this.props.requestSexChanged(text);
	}
	onAgeChange = (text) => {
		this.props.requestAgeChanged(text);
	}
	onRelationshipChange = (text) => {
		this.props.requestRelationshipChanged(text);
	}
	onReceiverNameChange = (text) => {
		this.props.requestReceiverNameChanged(text);
	}
	onOccasionChange = (text) => {
		this.props.requestOccasionChanged(text);
	}
	onPriceChange = (text) => {
		this.props.requestPriceChanged(text);
	}
	onInterestChange = (text) => {
		this.props.requestInterestChanged(_.concat(this.props.interest, text));
	}
	onStyleChange = (text) => {
		this.props.requestStyleChanged(_.concat(this.props.style, text));
	}
	onOtherChange = (text) => {
		this.props.requestOtherChanged(text);
	}
	onSubmitPress = async () => {
		const { location, sex, age, relationship, receiverName,
			price, occasion, interest, style, other } = this.props;
		await firebase.auth().currentUser.getIdToken(true)
			.then((idToken) => {
				try {
					this.props.requestGift({
						idToken,
						location,
						sex,
						age,
						relationship,
						receiverName,
						price,
						occasion,
						interest,
						style,
						other
					}, () => {
						//this.props.navigation.navigate('isFindGift'); => Nav Reducer
					});
				} catch (err) {
					//
				}
			}).catch((error) => {
				// Handle error
				console.log(error);
			});
	}
	renderButton = () => {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<Btn
				title="SUBMIT REQUESTS"
				bgColor={COLOR.primary}
				onPress={this.onSubmitPress}
			/>
		);
	}
	render() {
		const { section, sectionItem, sectionPad, sectionTag, sectionTitle } = styles;
		return (
			<KeyboardAwareScrollView
			style={{ backgroundColor: '#f8f8f8' }}
			scrollEnabled
			animated
		>


					<View style={section}>
						<View style={sectionItem}>
							<Avatar
								height={120}
								width={120}
								rounded
								source={avatar}
							/>

							<Text
								style={{
									marginVertical: 15,
									fontSize: 18,
									fontWeight: '600'
								}}
							>Hai Nguyen</Text>
						</View>

						<SlideSelect items={sexs} onPress={this.onSexChange} />
						<SlideSelect items={ages} onPress={this.onAgeChange} />
						<SlideSelect items={popular} onPress={this.onRelationshipChange} />
					</View>

					<View style={sectionPad}>
						<Text style={sectionTitle}>Receiver</Text>

						<TextField
							style={{ textAlign: 'center', marginTop: 20 }}
							placeholder="Ex: AirLaLa"
							value={this.props.receiverName}
							onChangeText={this.onReceiverNameChange}
						/>
					</View>

					<View style={section}>
						<Text style={[sectionTitle, { margin: 15 }]}>Occasion</Text>
						<SlideBox occasion={occasions} onPress={this.onOccasionChange} />
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
						>${this.props.price ? this.props.price : 0}-${this.props.price + 100}</Text>

						<Slider
							minimumValue={0}
							maximumValue={1000}
							minimumTrackTintColor={COLOR.primary}
							maximumTrackTintColor='#eee'
							value={this.props.price}
							onSlidingComplete={this.onPriceChange}
							step={100}
						/>

					</View>
					<View style={sectionPad}>
						<Text style={sectionTitle}>Recipient's Interests</Text>

						<View style={sectionTag}>
							<TagSelect onTagPress={this.onInterestChange}>Academics</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Adventure</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Art</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Beer</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Cooking</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Crafts & DIY</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Creative Workspaces</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Design</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Entertaining</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Family</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Fashion</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Feminism</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Film</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Food</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Games</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Hign End Items</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Sport</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>History</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Liquor</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Music</TagSelect>
							<TagSelect onTagPress={this.onInterestChange}>Nature</TagSelect>
						</View>
					</View>

					<View style={sectionPad}>
						<Text style={sectionTitle}>Recipient's Style</Text>

						<View style={sectionTag}>
							<TagSelect onTagPress={this.onStyleChange}>elegant</TagSelect>
							<TagSelect onTagPress={this.onStyleChange}>alternative</TagSelect>
							<TagSelect onTagPress={this.onStyleChange}>fun</TagSelect>
							<TagSelect onTagPress={this.onStyleChange}>sporty</TagSelect>
							<TagSelect onTagPress={this.onStyleChange}>luxurious</TagSelect>
							<TagSelect onTagPress={this.onStyleChange}>conventional</TagSelect>
						</View>
					</View>

					<View style={sectionPad}>
						<Text style={sectionTitle}>Other interests or thoughts optional</Text>
						<View style={{ marginTop: 20, borderStyle: 'dashed', borderWidth: 1, borderColor: '#ddd', paddingVertical: 20 }}>
							<TextInput
								style={{
									minHeight: 60,
									textAlign: 'center',
									fontSize: 16
								}}
								underlineColorAndroid={'transparent'}
								multiline
								selectionColor={COLOR.primary}
								placeholder="He/She is interested in Traveling and Wine, etc..."
								placeholderTextColor="#999"
								value={this.props.other}
								onChangeText={this.onOtherChange}
							/>
						</View>
					</View>

					<View style={{ marginVertical: 30 }}>
						{this.renderButton()}
					</View>


			</KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	section: {
		backgroundColor: '#fff',
		// paddingVertical: 15,
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
		marginBottom: 15,
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
		borderTopColor: '#eee',
		borderTopWidth: 1,
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

const mapStateToProps = ({ requestGiftState }) => {
	const { location, sex, age, relationship, receiverName, loading, error,
		price, occasion, interest, style, other } = requestGiftState;
	return { location, sex, age, relationship, receiverName, loading, error, price, occasion, interest, style, other };
};

export default connect(mapStateToProps, {
	requestSexChanged,
	requestAgeChanged,
	requestReceiverNameChanged,
	requestRelationshipChanged,
	requestOccasionChanged,
	requestPriceChanged,
	requestInterestChanged,
	requestStyleChanged,
	requestOtherChanged,
	requestGift
})(GiftSelection);
