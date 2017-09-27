import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import GooglePlacesInput from './GooglePlacesInput';
import ListRadio from '../../components/ListRadio';
import Btn from '../../components/Btn';

import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';

const items = [
	{
		key: 1,
		value: undefined,
		location: '48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City 48th Floor, Bitexco Financial Tower'
	},
	{
		key: 2,
		value: undefined,
		location: '48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City 48th Floor, Bitexco Financial Tower'
	},

	{
		key: 3,
		value: undefined,
		location: '48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City 48th Floor, Bitexco Financial Tower'
	},
	{
		key: 4,
		value: undefined,
		location: '48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City 48th Floor, Bitexco Financial Tower'
	}

];

class DeliveryBlank extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Delivery'.toUpperCase(),
		headerStyle,
		headerTitleStyle
		// headerLeft: <Icon
		//     name='chevron-left'
		//     color='#11b8ab'
		//     onPress={() => navigation.goBack()}
		// />
	})

	render() {
		return (
			<View style={styles.wraper}>
				<ScrollView contentContainerStyle={{ padding: 15 }}>
					<Text style={{ paddingVertical: 15, fontWeight: '600', color: '#777' }}>SHIP TO:</Text>
					<GooglePlacesInput />
					<View>
						<View style={styles.addLocation}>
							<Icon
								size={30}
								name='location-on'
								color={COLOR.primary}
							/>

							<TextInput
								style={{
									width: WIDTH_SCREEN - 90,
									marginLeft: 20,
									height: 50
								}}
								placeholder="Add new location"
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>

					<View style={styles.listLocation}>
						<ListRadio data={items} />
					</View>

				</ScrollView>
				<View style={{ paddingVertical: 10 }}>
					<Btn
						style={{ width: 150 }}
						bgColor={COLOR.primary}
						title="NEXT"
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wraper: {
		flex: 1,
		backgroundColor: COLOR.background
	},
	listLocation: {
		backgroundColor: '#fff', 
		borderColor: '#ddd', 
		borderWidth: 1, 
		borderBottomWidth: 0 
	},
	addLocation: {
		marginBottom: 15,
		paddingVertical: 5,
		paddingHorizontal: 5,
		flexDirection: 'row',
		borderColor: '#ddd',
		borderWidth: 1,
		backgroundColor: '#fff'
	}
});

export default DeliveryBlank;
