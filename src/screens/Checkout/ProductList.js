import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { HEIGHT_SCREEN } from '../../config/config';

class ProductList extends Component {
    render() {
        const { listProduct, itemStyle, quantityStyle } = styles;
        return (
            <View style={listProduct}>
                <View style={itemStyle}>
                    <View style={{ width: 100, height: 80, backgroundColor: '#eee' }} />
                    <View style={{ width: HEIGHT_SCREEN - 190 }}>
                        <Text
                            style={{ fontWeight: 'bold', marginBottom: 10 }}
                        >
                            Wine Bottle Holder
                            </Text>
                        <Text style={{ color: '#FF5700' }}>$500</Text>
                    </View>
                    <View
                        style={quantityStyle}
                    >
                        <Text style={{ fontSize: 50 }}>+</Text>
                        <Text style={{ color: '#FF5700' }}>2</Text>
                        <Text>-</Text>
                    </View>
                </View>
                <View style={itemStyle}>
                    <View style={{ width: 100, height: 80, backgroundColor: '#eee' }} />
                    <View style={{ width: HEIGHT_SCREEN - 190 }}>
                        <Text
                            style={{ fontWeight: 'bold', marginBottom: 10 }}
                        >
                            Wine Bottle Holder
                            </Text>
                        <Text style={{ color: '#FF5700' }}>$500</Text>
                    </View>
                    <View
                        style={quantityStyle}
                    >
                        <Text>+</Text>
                        <Text style={{ color: '#FF5700' }}>2</Text>
                        <Text>-</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listProduct: {
        backgroundColor: '#fff',
    },
    itemStyle: {
        backgroundColor: '#fff',
        width: HEIGHT_SCREEN,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quantityStyle: {
        borderColor: '#eee',
        borderWidth: 1,
        flexDirection: 'column',
        width: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default ProductList;
