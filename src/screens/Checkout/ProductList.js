import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import ProductItem from './ProductItem';

import Swipe from '../../components/Swipe';

import { STYLES, COLOR, WIDTH_SCREEN } from '../../config/config';

class ProductList extends Component {

	renderItem = ({ item }) => (
		<Swipe
			width={WIDTH_SCREEN - 20}
			height={91}
			backgroundColor={COLOR.secondary}
			style={{
				borderBottomColor: '#eee',
				borderBottomWidth: 1
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
		return (

			<FlatList
				showsVerticalScrollIndicator={false}
				data={this.props.items}
				keyExtractor={(item) => this.props.items.indexOf(item)}
				renderItem={this.renderItem}
				removeClippedSubviews={false}
				style={[{
					backgroundColor: '#fff',
					margin: 10
				}, STYLES.boxShadow]}
			/>

		);
	}
}

const mapStateToProps = state => {
	const GiftID = state.listRequest.giftActive;
	const cardActive = state.listRequest.cardActive;
	const items = _.filter(_.map(state.listRequest.cart[cardActive].items, (val, uid) => ({ ...val, uid })), (gift) => gift.quantity > 0);
	return { items, cardActive, GiftID };
};
export default connect(mapStateToProps, {})(ProductList);

