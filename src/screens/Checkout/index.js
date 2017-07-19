import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, headerStyle, headerTitleStyle } from '../../config/config';
import Avatar from './Avatar';
import CheckoutButton from './CheckoutButton';
import ProductList from './ProductList';

class Checkout extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Checkout',
        headerTintColor: '#313131',
        headerLeft: <Icon
            name='chevron-left'
            color={COLOR.primary}
            size={24}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />,
        headerRight: <View style={{ flexDirection: 'row', paddingRight: 15 }}>
            <Icon
                size={15}
                name='queue'
                color='#FF5700'
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 5, color: '#FF5700' }}>Chat</Text>
        </View>,
        headerTitleStyle,
        headerStyle,
    })
    render() {
        return (
            <ScrollView style={styles.wraper}>
                <Avatar />
                <ProductList />
                <CheckoutButton />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1
    },
});

export default Checkout;
