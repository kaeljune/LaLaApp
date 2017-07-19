import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import { HEIGHT_SCREEN } from '../../config/config';
import avatar from '../../../assets/images/avatar.png';

class Avatar extends Component {
    render() {
        const { sectionContainer, sectionHead, imageStyle } = styles;
        return (
            <View style={sectionContainer}>
                    <View style={sectionHead}>
                        <Image 
                            style={imageStyle} 
                            source={avatar} 
                        />
                        <Text>Hai Nguyen</Text>
                        <Text>for Birthday</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sectionHead: {
        padding: 15,
        width: HEIGHT_SCREEN,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    imageStyle: {
        width: 100, 
        height: 100, 
        marginBottom: 15
    }
});

export default Avatar;
