import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import { removeItemCart } from '../../actions';
import ProductItem from './ProductItem';

import Swipe from '../../components/Swipe';

import { STYLES, COLOR, WIDTH_SCREEN } from '../../config/config';

class ProductList extends Component {

	handleSwipe = (bool) => {
		this.props.handleTouch(bool);
	}
	removeItem = (uid) => {
		console.log('uid', uid);
		this.props.removeItemCart(this.props.cardActive, uid);
	}

	renderItem = ({ item }) => (
		<Swipe
			removeItem={() => this.removeItem(item.uid)}
			handleSwipe={this.handleSwipe}
			width={WIDTH_SCREEN - 20}
			height={91}
			backgroundColor={COLOR.secondary}
			style={{
				borderColor: '#eee',
				borderWidth: 1,
				marginBottom: 5
			}}
		>
			<ProductItem
				cardActive={this.props.cardActive}
				uid={item.uid}
				image={item.image}
				name={item.name}
				price={_.parseInt(_.replace(item.price, /^\D+/g, ''))}
				total={item.quantity}
			/>
		</Swipe>
	)
	render() {
 		if	(this.props.items.length <= 0) {
			return (<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
					<View style={styles.blankWrap}>
						<Text style={styles.blankText}>No item in card.</Text>
						<Icon
							name="add"
							color={COLOR.primary}
							reverse
							raised
						/>
					</View>
				</TouchableOpacity>);
		}

		return (
			<FlatList
				scrollEnabled={false}
				showsVerticalScrollIndicator={false}
				data={this.props.items}
				keyExtractor={(item) => this.props.items.indexOf(item)}
				renderItem={this.renderItem}
				removeClippedSubviews={false}
				style={{ margin: 10 }}
			/>
		);
	}
}

const styles = StyleSheet.create({
	blankWrap: {
		alignItems: 'center',
		height: WIDTH_SCREEN - 100,
		justifyContent: 'center'
	},
	blankText: {
		fontSize: 16,
		fontWeight: '100',
		color: '#777',
		marginBottom: 15
	}
});

const mapStateToProps = state => {
	const GiftID = state.listRequest.giftActive;
	const cardActive = state.listRequest.cardActive;
	const items = _.filter(_.map(state.listRequest.cart[cardActive].items, (val, uid) => ({ ...val, uid })), (gift) => gift.quantity > 0);
	return { items, cardActive, GiftID };
};

export default connect(mapStateToProps, { removeItemCart })(ProductList);
