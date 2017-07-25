import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import ProductItem from './ProductItem';

import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../../config/config';

class ProductList extends Component {
    render() {
        const { listProduct } = styles;
        return (
            <View style={listProduct}>
            
                <ProductItem
                    name="Wine bittle holder"
                    price="500"
                    total="1"
                />
                <ProductItem
                    name="Wine bittle holder"
                    price="500"
                    total="1"
                />
                <ProductItem
                    name="Wine bittle holder"
                    price="500"
                    total="1"
                />
                <ProductItem
                    name="Wine bittle holder"
                    price="500"
                    total="1"
                />
                <ProductItem
                    name="Wine bittle holder"
                    price="500"
                    total="1"
                />
                <ProductItem
                    name="Wine bittle holder"
                    price="500"
                    total="1"
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listProduct: {
        backgroundColor: '#fff',
    }
});

export default ProductList;
