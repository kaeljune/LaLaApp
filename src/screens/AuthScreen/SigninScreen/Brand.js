import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import logo from '../../../../assets/images/logo.png';
import { WIDTH_SCREEN, COLOR } from '../../../config/config';

class Brand extends Component {
    render() {
        const { container, logoStyle, desStyle } = styles;
        return (
            <View style={container}>
                <Image source={logo} style={logoStyle} />
                <Text style={desStyle}>
                    Empowering global artisans & small businesses by artificial intelligent
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.background,
        alignItems: 'center'
    },
    logoStyle: {
        marginTop: 30,
    },
    desStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        backgroundColor: 'transparent',
        width: WIDTH_SCREEN - 100,
        lineHeight: 25,
        marginTop: 10,
        marginBottom: 30,
    },
});

export default Brand;
