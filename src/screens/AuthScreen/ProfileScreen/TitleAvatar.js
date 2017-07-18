import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { WIDTH_SCREEN } from '../../../config/config';

class TitleAvatar extends Component {
    render() {
        const { wraperStyle, textStyle, avatarStyle } = styles;
        return (
            <View style={wraperStyle}>
                <Text style={textStyle}>John Doe</Text>
                <View
                    style={avatarStyle}
                >
                    <Icon
                        reverse
                        reverseColor="#11b8ab"
                        name='person-outline'
                        color='#fff'
                        size={45}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraperStyle: { flexDirection: 'column', alignItems: 'center', height: 175 },
    textStyle: {
        textAlign: 'center',
        backgroundColor: '#11b8ab',
        height: 125,
        color: '#fff',
        paddingTop: 30,
        width: WIDTH_SCREEN,
        fontSize: 18,
        fontWeight: 'bold',
        zIndex: 1
    },
    avatarStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: -50,
        zIndex: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TitleAvatar;
