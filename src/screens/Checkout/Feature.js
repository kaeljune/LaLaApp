import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import { Avatar } from 'react-native-elements';

import { HEIGHT_SCREEN } from '../../config/config';
import avatar from '../../../assets/images/avatar.png';

const Feature = (props) => {
    const { sectionContainer, sectionHead, avatarStyle } = styles;
    return (
        <View style={sectionContainer}>
            <View style={sectionHead}>

                <Avatar
                    rounded
                    height={100}
                    width={100}
                    source={avatar} 
                    style={avatarStyle}
                />

                <Text style={{ fontWeight: '600', marginBottom: 5 }}>Hai Nguyen</Text>
                <Text style={{ fontSize: 14 }}>for Birthday</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sectionHead: {
        paddingVertical: 20,
        width: HEIGHT_SCREEN,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    avatarStyle: {
        marginBottom: 20
    }
});

export default Feature;
