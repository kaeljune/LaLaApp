import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

const Btn = (props) => {
    const { wrapBtn, linearStyle, btnText } = styles;
    return (
        <View style={wrapBtn}>
            <TouchableOpacity onPress={props.onPress}>
                <LinearGradient 
                    colors={props.colors}
                    start={props.start}
                    end={props.end}
                    style={linearStyle}
                >
                    <Text style={btnText}>{props.children}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};
    

const styles = StyleSheet.create({
    wrapBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearStyle: {
        minWidth: 150,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontWeight: '500'
    }
});

export default Btn;
