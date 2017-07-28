import React, { Component } from 'react';
import { FlatList } from 'react-native';

import ProductItem from './ProductItem';

const items = [
    {
        name: 'Wine bittle holder',
        price: '500',
        total: '1',
    },
    {
        name: 'Wine bittle holder',
        price: '500',
        total: '1',
    },
    {
        name: 'Wine bittle holder',
        price: '500',
        total: '1',
    },
    {
        name: 'Wine bittle holder',
        price: '500',
        total: '1',
    },
    {
        name: 'Wine bittle holder',
        price: '500',
        total: '1',
    },
    {
        name: 'Wine bittle holder',
        price: '500',
        total: '1',
    },
    {
        name: 'Wine bittle holder',
        price: '500',
        total: '1',
    },
];

class ProductList extends Component {

    renderItem = () => (
        <ProductItem
            name="Wine bittle holder"
            price="500"
            total="1"
        />
    )
    
    render() {
        return (
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={items}
                keyExtractor={(item) => items.indexOf(item)}
                renderItem={this.renderItem}
            />
        );
    }
}

export default ProductList;
