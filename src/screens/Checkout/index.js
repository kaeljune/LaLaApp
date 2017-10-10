import React, { Component } from 'react';
import { WebBrowser } from 'expo';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';
import Btn from '../../components/Btn';
import Feature from './Feature';
import ProductList from './ProductList';

class Checkout extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Checkout',
		headerStyle,
		headerTitleStyle,
		headerTintColor: COLOR.primary,
		headerRight: <TouchableOpacity
		style={{ flexDirection: 'row', paddingRight: 15 }}
		onPress={async () => { await WebBrowser.openBrowserAsync('https://m.me/airlala.official'); }}
		>
			<Icon
				size={15}
				name="chat"
				color={COLOR.secondary}
				onPress={() => navigation.goBack()}
			/>
			<Text style={{ marginLeft: 5, color: '#555' }}>Chat</Text>
		</TouchableOpacity>
	})
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8' }} contentContainerStyle={styles.container}>
					<Feature user={this.props.navigation.state.params.user} />
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
						<Text style={{ fontSize: 20, fontWeight: '700', color: COLOR.secondary }}>${this.props.total}</Text>
					</View>

					<Btn
						style={{
							width: (WIDTH_SCREEN / 2) - 20,
							marginRight: 15
						}}
						title="CHECKOUT"
						bgColor={COLOR.primary}
						onPress={() => this.props.navigation.navigate('writeanote', { avaTitle: this.props.navigation.state.params.avaTitle, user: this.props.navigation.state.params.user })}
					/>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// paddingBottom: 90,
	},
	bottomCheckout: {
		backgroundColor: '#fff',
		width: WIDTH_SCREEN,
		borderTopColor: '#eee',
		borderTopWidth: 1,
		height: 80,
		flexDirection: 'row',
		alignItems: 'center'
	}
});

const mapStateToProps = state => {
	const GiftID = state.listRequest.giftActive;
	const cardActive = state.listRequest.cardActive;
	const items = _.filter(_.map(state.listRequest.cart[cardActive].items, (val, uid) => ({ ...val, uid })), (gift) => gift.quantity > 0);
	const total = _.sumBy(items, function(o) { return o.quantity * _.parseInt(_.replace(o.price, /^\D+/g, '')); });
	return { items, cardActive, GiftID, total };
};

export default connect(mapStateToProps, {})(Checkout);
