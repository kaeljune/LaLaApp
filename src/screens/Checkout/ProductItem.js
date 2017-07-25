import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { WIDTH_SCREEN, COLOR } from '../../config/config';

const ProductList = ({ name, price, total }) => 
    <View style={styles.itemStyle}>
        <View style={{ width: 100, height: 80, backgroundColor: '#eee' }} />
        <View style={{ width: WIDTH_SCREEN - 190 }}>
            <Text
                style={{ fontWeight: 'bold', marginBottom: 10 }}
            >
                {name}
                </Text>
            <Text style={{ color: COLOR.secondary }}>$ {price}</Text>
        </View>
        <View style={styles.quantityStyle}>
            <View style={styles.quantityAction}>
                <Text>+</Text>
            </View>
            <View style={styles.quantityAction}>
                 <Text style={{ color: COLOR.secondary }}>{total}</Text>
            </View>
            <View style={styles.quantityAction}>
                <Text>-</Text>
            </View>
        </View>
    </View>;

const styles = StyleSheet.create({
    itemStyle: {
        backgroundColor: '#fff',
        width: WIDTH_SCREEN,
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
    },
    quantityAction: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
    }
});

export default ProductList;

