import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Switch } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

class DeliveryBlank extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Delivery',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
        />
    })

    render() {
        return (
            <View style={styles.wraper}>
                <View style={{ flex: 0.8 }}>
                    <Text style={{ marginBottom: 10 }}>SHIP TO:</Text>
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>FULLNAME</Text>
                            </View>
                            <TextInput
                                style={{ width: width - 160 }}
                                value="Hai Nguyen"
                            />
                        </View>

                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>PHONE NUMBER</Text>
                            </View>

                            <TextInput
                                style={{ width: width - 155 }}
                                value="(+84) 935 38 39 40"
                            />
                        </View>

                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>ADDRESS</Text>
                            </View>

                            <TextInput
                                style={{ width: width - 155 }}
                                value="Ho Chi Minh City"
                            />
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>CITY</Text>
                            </View>

                            <TextInput
                                style={{ width: width - 155 }}
                                value="TAIWAN"
                            />
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>STATE</Text>
                            </View>

                            <TextInput
                                style={{ width: width - 155 }}
                                value="TAIPEI"
                            />
                        </View>
                        <View style={styles.rowStyle}>
                            <View style={{ width: 110 }}>
                                <Text style={styles.labelStyle}>ZIP CODE</Text>
                            </View>

                            <TextInput
                                style={{ width: width - 155 }}
                                value="7000"
                            />
                        </View>

                        <View style={styles.rowStyle}>
                            <View style={{ width: 200 }}>
                                <Text style={styles.labelStyle}>SAVE FOR FUTURE PURCHASES</Text>
                            </View>
                            <Switch value={true} />
                        </View>

                    </View>
                </View>


                <View style={{ alignItems: 'center', flex: 0.2 }}>
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
        flex: 1,
        padding: 15,
        backgroundColor: '#F8F8F8',
        alignContent: 'space-between'
    },
    rowStyle: {
        padding: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    labelStyle: {
        color: '#454553',
        fontSize: 12,
        marginRight: 10
    }
});

export default DeliveryBlank;
