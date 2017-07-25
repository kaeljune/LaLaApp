import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, headerStyle, headerTitleStyle } from '../../config/config';

import Feature from './Feature';
import CheckoutButton from './CheckoutButton';
import ProductList from './ProductList';
import Btn from '../../components/Btn';

class Checkout extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Checkout',
        headerStyle: {
            paddingHorizontal: 5
        },
        headerTitleStyle: {
			alignSelf: 'center'
		},
        headerTintColor: '#313131',
        headerLeft: <Icon
            name='chevron-left'
            color={COLOR.primary}
            size={24}
            onPress={() => navigation.goBack()}
        />,
        headerRight: <View style={{ flexDirection: 'row', paddingRight: 5 }}>
            <Icon
                size={15}
                name='queue'
                color='#FF5700'
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 5, color: '#FF5700' }}>Chat</Text>
        </View>
    })
    render() {
        return (
            <ScrollView style={styles.wraper}>
                <Feature />
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
