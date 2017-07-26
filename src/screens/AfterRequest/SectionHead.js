import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

import { WIDTH_SCREEN } from '../../config/config';

import avatar from '../../../assets/images/avatar.png';

const SectionHead = () => {
    const { sectionHead, nameStyle } = styles;
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <View style={sectionHead}>
                <Avatar
                    height={100}
                    width={100}
                    rounded
                    source={avatar}
                />

                <Text style={nameStyle}>Hai Nguyen</Text>
                <Text style={{ marginBottom: 20 }}>Birthday | $200-500</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        padding: 15
    },
    sectionHead: {
        padding: 15,
        width: WIDTH_SCREEN - 100,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    nameStyle: {
        marginVertical: 10, 
        fontWeight: '600', 
        fontSize: 18
    }
});

export default SectionHead;
