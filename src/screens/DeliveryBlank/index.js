import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import CheckBox from '../../components/CheckBox';
import Switch from '../../components/Switch';
import Btn from '../../components/Btn';

import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';

const items = [
    {
        key: 1,
        value: undefined,
        location: '48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City 48th Floor, Bitexco Financial Tower'
    },
    {
        key: 2,
        value: undefined,
        location: '48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City 48th Floor, Bitexco Financial Tower'
    }
];

class DeliveryBlank extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Delivery'.toUpperCase(),
        headerStyle, 
        headerTitleStyle
        // headerLeft: <Icon
        //     name='chevron-left'
        //     color='#11b8ab'
        //     onPress={() => navigation.goBack()}
        // />
    })

    render() {
        return (
            <View style={styles.wraper}>
                <ScrollView>
                    <Text style={{ marginBottom: 10 }}>SHIP TO:</Text>
                    <View style={{ backgroundColor: '#fff' }}>
                        <FlatList 
                            data={items}
                            renderItem={({ item }) => (
                                <CheckBox 
                                    value={item.value} 
                                    text={item.location}
                                />
                            )}
                        />
                        <View style={styles.addLocation}>
                            <Icon
                                size={15}
                                name='add'
                                color='#ddd'
                            />

                            <TextInput
                                style={{ 
                                    width: WIDTH_SCREEN - 90, 
                                    marginLeft: 20,
                                    height: 50
                                }} 
                                placeholder="Add new location"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>

                </ScrollView>
                <Btn 
                    bgColor={COLOR.primary}
                    title="NEXT"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        padding: 15,
        backgroundColor: COLOR.background
    },
    addLocation: {
        paddingHorizontal: 15,
        flexDirection: 'row'
    }
});

export default DeliveryBlank;
