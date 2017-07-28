import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import { WIDTH_SCREEN, COLOR, headerStyle, headerTitleStyle } from '../../config/config';

import visa from '../../../assets/images/visa.png';

class Payment extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Add  a Credit card',
        headerStyle, 
        headerTitleStyle, 
        // headerLeft: <Icon
        //     name='chevron-left'
        //     color='#11b8ab'
        //     onPress={() => navigation.goBack()}
        // />
    })
    render() {
        return (
            <View style={styles.wraper}>
                <View style={{ flex: 0.8 }}>
                    <Text style={{ padding: 15 }}>SELECT A CREDIT:</Text>
                    <View style={styles.sectionStyle}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={visa} />
                            <Text style={{ fontSize: 8, marginTop: 5 }}>CREDIT/ DEBIT CARD</Text>
                        </View>
                    </View>
                    <View style={styles.sectionStyle}>
                        <View>
                            <Text style={{ marginBottom: 30, marginTop: 10 }}>PAYMENT DETAILS</Text>

                            <View style={styles.rowStyle}>
                                <View style={{ width: 130 }}>
                                    <Text style={styles.labelStyle}>CARD NUMBER</Text>
                                </View>
                                <View style={{ width: WIDTH_SCREEN - 160 }}>
                                    <Text style={styles.valueStyle}>4688 2356 5536 6767</Text>
                                </View>
                            </View>
                            <View style={styles.rowStyle}>
                                <View style={styles.rowStyle}>
                                    <View style={{ width: 130 }}>
                                        <Text style={styles.labelStyle}>EXPIRATION DATE</Text>
                                    </View>
                                    <View style={{ width: WIDTH_SCREEN / 5, marginRight: 15 }}>
                                        <Text style={styles.valueStyle}>01/20</Text>
                                    </View>
                                </View>
                                <View style={styles.rowStyle}>
                                    <View><Text style={styles.labelStyle}>CVV</Text></View>
                                    <View style={{ width: WIDTH_SCREEN / 5, marginLeft: 10 }}>
                                        <Text style={styles.valueStyle}>567</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rowStyle}>
                                <View style={{ width: 130 }}>
                                    <Text style={styles.labelStyle}>CARDHOLDER NAME</Text>
                                </View>
                                <View style={{ width: WIDTH_SCREEN - 160 }}>
                                    <Text style={styles.valueStyle}>TAN DAO DUY</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', flex: 0.2 }}>
                    <Button
                        raise
                        title="PURCHASES"
                        backgroundColor={COLOR.primary}
                        buttonStyle={{
                            width: 150,
                            height: 50
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignContent: 'space-between'
    },
    sectionStyle: {
        flexDirection: 'row', 
        backgroundColor: '#fff',  
        padding: 15,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginBottom: 20
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15
    },
    labelStyle: {
        color: '#454553',
        fontSize: 10,
        marginRight: 10,
        marginTop: 5
    },
    valueStyle: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 10,
        fontSize: 17
    }

});


export default Payment;
