import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { COLOR } from '../../../config/config';
import { Spinner } from '../../../components/Spinner';


const TitleAvatar = ({ data }) => {
    const { wraperStyle, textStyle, avatarStyle } = styles;
    console.log(data);
    if (!data.userLogin.email) {
        return (
            <View style={wraperStyle}>
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
                <Spinner size="small" />
            </View>
        );
    }
    return (
        <View style={wraperStyle}>
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
        <Text style={textStyle}>{data.userLogin.name}</Text>
    </View>       
    );
};

const styles = StyleSheet.create({
    wraperStyle: { 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: COLOR.primary,
        paddingVertical: 40,
        marginBottom: 20
    },
    textStyle: {
        color: '#fff',
        marginTop: 15,
        fontSize: 18,
        fontWeight: '600'
    },
    avatarStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TitleAvatar;
