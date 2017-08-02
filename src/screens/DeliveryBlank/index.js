import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';

import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';

class DeliveryBlank extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Delivery',
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
                <Text style={{ marginBottom: 10 }}>SHIP TO:</Text>
                <View style={{ backgroundColor: '#fff' }}>
                    <View>
                        <CheckBox
                            checkedIcon='done'
                            iconType='material'
                            uncheckedIcon='' checked
                            textStyle={{ fontWeight: 'normal', fontSize: 14 }}
                            containerStyle={{ borderColor: 'transparent', backgroundColor: 'transparent' }}
                            title='48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City.'
                        />

                        <CheckBox 
                            checkedIcon='done'
                            iconType='material'
                            uncheckedIcon='' checked
                            textStyle={{ fontWeight: 'normal', fontSize: 14 }}
                            title='48th Floor, Bitexco Financial Tower, 02 Hai Trieu street, Ben Nghe Ward, Distrcit 1, Ho Chi Minh City.'
                        />
                    </View>
                    <View style={styles.addLocation}>
                        <Icon
                            size={15}
                            name='add'
                            color='#ddd'
                        />

                        <TextInput
                            style={{ 
                                width: WIDTH_SCREEN - 90, 
                                marginLeft: 15 
                            }} 
                            placeholder="Add new location"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        padding: 15
    },
    addLocation: {
        padding: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    listAddress: {
        color: 'pink'
    }
});

export default DeliveryBlank;
