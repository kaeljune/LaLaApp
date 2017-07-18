import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { WIDTH_SCREEN } from '../../config/config';
import avatar from '../../../assets/images/avatar.png';

class SectionHead extends Component {
    render() {
        const { sectionHead } = styles;
        return (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={sectionHead}>
                    <Image
                        style={{ width: 100, height: 100, marginBottom: 15 }} source={avatar}
                    />
                    <Text>Hai Nguyen</Text>
                    <Text style={{ marginBottom: 30 }}>Birthday | $200-500</Text>
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
    sectionHead: {
        padding: 15,
        width: WIDTH_SCREEN - 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center'
    },
});

export default SectionHead;
