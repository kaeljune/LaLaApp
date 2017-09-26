import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import ProductItem from './ProductItem';

import { STYLES } from '../../config/config';

class ProductList extends Component {

	renderItem = ({ item }) => (
		<ProductItem
			cardActive={this.props.cardActive}
			uid={item.uid}
			image={item.image}
			name={item.name}
			price={_.parseInt(_.replace(item.price, /^\D+/g, ''))}
			total={item.quantity}
		/>
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

