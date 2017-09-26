import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Animated } from 'react-native';
import { Icon } from 'react-native-elements';

import Btn from '../../components/Btn';
import Switch from '../../components/Switch';
import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';


class DeliveryBlank extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Delivery',
        headerStyle, 
        headerTitleStyle
        // headerLeft: <Icon
        //     name='chevron-left'
        //     color={COLOR.primary}
        //     onPress={() => navigation.goBack()}
        // />
    })

    componentWillMount() {
        this.translateY = new Animated.Value(100);
    }

    componentDidMount() {
        Animated.spring(this.translateY, {
            toValue: 0
        }).start();
    }

    render() {
        return (
            <ScrollView style={styles.wraper}>
                <Animated.View style={{ marginBottom: 15, transform: [{ translateY: this.translateY }] }}>
                    <Text style={{ padding: 15 }}>SHIP TO:</Text>
                    <View style={{ backgroundColor: '#fff', borderTopColor: '#eee', borderTopWidth: 1 }}>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>FULLNAME</Text>
                            </View>
                            <TextInput
                                style={{ width: WIDTH_SCREEN - 160 }}
                                value="Hai Nguyen"
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>PHONE NUMBER</Text>
                            </View>

                            <TextInput
                                style={{ width: WIDTH_SCREEN - 155 }}
                                value="(+84) 935 38 39 40"
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>ADDRESS</Text>
                            </View>

                            <TextInput
                                style={{ width: WIDTH_SCREEN - 155 }}
                                value="Ho Chi Minh City"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>CITY</Text>
                            </View>

                            <TextInput
                                style={{ width: WIDTH_SCREEN - 155 }}
                                value="TAIWAN"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>STATE</Text>
                            </View>

                            <TextInput
                                style={{ width: WIDTH_SCREEN - 155 }}
                                value="TAIPEI"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>ZIP CODE</Text>
                            </View>

                            <TextInput
                                style={{ width: WIDTH_SCREEN - 155 }}
                                value="7000"
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={styles.rowStyle}>
                            
                            <Switch 
                                text="SAVE FOR FUTURE PURCHASES"
                                value
                                color={COLOR.primary}
                                styleText={{
                                    color: '#454553',
                                    fontSize: 10
                                }}
                                height={30}
                                width={45}
                            />    
                        </View>

                    </View>
                </Animated.View>

                <View style={{ flex: 1 }}>
                    <Btn 
                        title="CHECKOUT"
                        bgColor={COLOR.primary}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        // padding: 15,
        backgroundColor: '#F8F8F8',
        alignContent: 'space-between',
        borderTopColor: '#eee',
        borderTopWidth: 1,
    },
    rowStyle: {
        padding: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    labelStyle: {
        color: '#454553',
        fontSize: 10,
        marginRight: 10
    }
});

export default DeliveryBlank;
