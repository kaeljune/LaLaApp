import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';

import Btn from '../../components/Btn';
import Feature from './Feature';
import ProductList from './ProductList';

class Checkout extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Checkout',
		headerStyle: {
			paddingHorizontal: 5
		},
		headerTitleStyle: {
			alignSelf: 'center'
		},
		headerTintColor: '#313131',
		headerLeft: <Icon
			name='chevron-left'
			color={COLOR.primary}
			size={24}
			onPress={() => navigation.goBack()}
		/>,
		headerRight: <View style={{ flexDirection: 'row', paddingRight: 5 }}>
			<Icon
				size={15}
				name="queue"
				color={COLOR.secondary}
				onPress={() => navigation.goBack()}
			/>
			<Text style={{ marginLeft: 5, color: COLOR.secondary }}>Chat</Text>
		</View>
	})
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={styles.wraper}>
					<Feature />
					<ProductList />

				</ScrollView>
				<View style={styles.bottomCheckout}>
					<View
						style={{
							marginLeft: 15,
							flexDirection: 'row',
							alignItems: 'center',
							flex: 1
						}}
					>
						<Text style={{ fontSize: 14, fontWeight: '100', color: '#454553', marginRight: 15 }}>TOTAL :</Text>
						<Text style={{ fontSize: 20, fontWeight: '700', color: COLOR.secondary }}>$ 900</Text>
					</View>
					
					<Btn
						style={{
							width: WIDTH_SCREEN / 2 - 30
						}}
						title="CHECKOUT"
						bgColor={COLOR.primary}
					/>
			
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wraper: {
		paddingBottom: 90,
		backgroundColor: '#f8f8f8',
	},
	bottomCheckout: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		backgroundColor: '#fff',
		width: WIDTH_SCREEN,
		borderTopColor: '#eee',
		borderTopWidth: 1,
		height: 80,
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default Checkout;
