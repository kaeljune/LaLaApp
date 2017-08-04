import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';

import Btn from '../../components/Btn';
import Feature from './Feature';
import CheckoutButton from './CheckoutButton';
import ProductList from './ProductList';

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
            <View>
                <ScrollView contentContainerStyle={styles.wraper}>
                    <Feature />
                    <ProductList />
                    
                </ScrollView>
                <View style={styles.bottomCheckout}>
                    <View 
                        style={{ 
                            marginLeft: 15, 
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            flex: 1
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#454553', marginRight: 15 }}>TOTAL :</Text> 
                        <Text style={{ fontSize: 20, fontWeight: '700', color: COLOR.secondary }}>$ 900</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <Btn 
                            title="CHECKOUT"
                            bgColor="#11B8AB"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        // flex: 1,
        paddingBottom: 69
    },
    bottomCheckout: {
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        backgroundColor: '#fff', 
        width: WIDTH_SCREEN,
        borderTopColor: '#eee',
        borderTopWidth: 1,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Checkout;
