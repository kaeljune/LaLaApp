import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import avatar from '../../../assets/images/avatar.png';

const { width } = Dimensions.get('window');

class Checkout extends Component {
     static navigationOptions = ({ navigation }) => ({
        title: 'Checkout',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
        />,
        headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
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
            <View style={styles.wraper}>
                <View style={[styles.sectionContainer]}>
                    <View style={styles.sectionHead}>
                        <Image 
                            style={{ width: 100, height: 100, marginBottom: 15 }} 
                            source={avatar} 
                        />
                        <Text>Hai Nguyen</Text>
                        <Text>for Birthday</Text>
                    </View>
                </View>

                <View style={styles.listProduct}>
                    <View style={styles.Item}>
                        <View style={{ width: 100, height: 80, backgroundColor: '#eee' }} />
                        <View style={{ width: width - 190 }}>
                            <Text 
                                style={{ fontWeight: 'bold', marginBottom: 10 }}
                            >
                                Wine Bottle Holder
                            </Text>
                            <Text style={{ color: '#FF5700' }}>$500</Text>
                        </View>
                        <View
style={{
                            borderColor: '#eee',
                            borderWidth: 1, 
                            flexDirection: 'column',
                            width: 30,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        >
                            <Text>+</Text>
                            <Text style={{ color: '#FF5700' }}>2</Text>
                            <Text>-</Text>
                        </View>
                    </View>
                    <View style={styles.Item}>
                        <View style={{ width: 100, height: 80, backgroundColor: '#eee' }} />
                        <View style={{ width: width - 190 }}>
                            <Text 
                                style={{ fontWeight: 'bold', marginBottom: 10 }}
                            >
                                Wine Bottle Holder
                            </Text>
                            <Text style={{ color: '#FF5700' }}>$500</Text>
                        </View>
                        <View
style={{
                            borderColor: '#eee',
                            borderWidth: 1, 
                            flexDirection: 'column',
                            width: 30,
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        >
                            <Text>+</Text>
                            <Text style={{ color: '#FF5700' }}>2</Text>
                            <Text>-</Text>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Button
                        raise
                        title="CHECKOUT"
                        backgroundColor="#11b8ab"
                        buttonStyle={{
                            width: 150,
                            height: 50,
                            marginTop: 30,
                            marginBottom: 20
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sectionHead: {
        padding: 15,
        width,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    listProduct: {
        backgroundColor: '#fff',
    },
    Item: {
        backgroundColor: '#fff',
        width,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Checkout;
