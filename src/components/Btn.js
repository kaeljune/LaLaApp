import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

const Btn = (props) => {
    const { wrapBtn, linearStyle, btnText } = styles;
    return (
        <View style={wrapBtn}>
            {/* <TouchableOpacity onPress={props.onPress}>
                <LinearGradient 
                    colors={props.colors}
                    start={props.start}
                    end={props.end}
                    style={linearStyle}
                >
                    <Text style={btnText}>{props.children}</Text>
                </LinearGradient>
            </TouchableOpacity> */}

            <View style={styles.wrapBtn}>
                <Button 
                    raise
                    icon={props.icon ? props.icon : null}
                    title={props.title}
                    backgroundColor={props.bgColor}
                    fontWeight="600"
                    borderRadius={3}
                    buttonStyle={styles.btnStyle}
                    onPress={props.onPress}
                />
            </View>
        </View>
    );
};
    

const styles = StyleSheet.create({
    wrapBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        minWidth: 150,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        backgroundColor: 'transparent',
        fontWeight: '500'
    }
});

export default Btn;
