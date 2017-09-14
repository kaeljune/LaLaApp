import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import ProductItem from './ProductItem';


class ProductList extends Component {

    renderItem = () => (   
        <ProductItem
            name={this.props.items[0].name}
            price={_.parseInt(_.replace(this.props.items[0].price, /^\D+/g, ''))}
            total={this.props.items[0].total}
        />
    )
    render() {
        return (
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={this.props.items}
                keyExtractor={(item) => this.props.items.indexOf(item)}
                renderItem={this.renderItem}
            />
        );
    }
}

const mapStateToProps = state => {
    const GiftID = state.listRequest.giftActive;
    const items = 
    [_.merge(_.find(_.map(state.listRequest.listGift, (val, uid) => ({ ...val, uid })),
        { uid: state.listRequest.giftActive }), { total: 1 })];
    return { items, GiftID };
  };
export default connect(mapStateToProps, {})(ProductList);

