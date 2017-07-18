import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { WIDTH_SCREEN } from '../../config/config';

class SectionMessage extends Component {
    render() {
        const { sectionChat, cirleIcon, chatText } = styles;
        return (
            <View style={sectionChat}>
                    <View style={cirleIcon}>
                        <Icon
                            size={15}
                            name='more'
                            color='#fff'
                        />
                    </View>
                    <View style={chatText}>
                        <Text>We are on it.</Text>
                        <Text>
                            We’ll report back promptly with wonderful with wonderfull gifts for HAI NGUYEN. Maenwhile, chat with us should you have any questions.
                        </Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionChat: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    chatText: {
        width: WIDTH_SCREEN - 75,
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 30
    },
    cirleIcon: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#11b8ab',
        marginRight: 15,
        marginBottom: -15,
        flexDirection: 'column',
        justifyContent: 'center'
    },
});

export default SectionMessage;
