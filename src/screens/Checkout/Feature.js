import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import { Avatar } from 'react-native-elements';

import { COLOR, HEIGHT_SCREEN } from '../../config/config';
import avatar from '../../../assets/images/avatar.png';

function Feature() {
    const { sectionContainer, sectionHead, avatarStyle } = styles;
    return (
        <View style={sectionContainer}>
            <View style={sectionHead}>
                <Avatar
                    rounded
                    height={100}
                    width={100}
                    source={avatar} 
                    avatarStyle={{ borderColor: '#fff', borderWidth: 1 }}
                    style={avatarStyle}
                />

                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5, color: '#fff' }}>Hai Nguyen</Text>
                <Text style={{ fontSize: 14, color: '#eee' }}>for Birthday</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLOR.primary,
        marginBottom: 10
    },
    sectionHead: {
        paddingVertical: 30,
        width: HEIGHT_SCREEN,
        alignItems: 'center',
    },
    avatarStyle: {
        marginBottom: 20,
        
    }
});

export default Feature;
