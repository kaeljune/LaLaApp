import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { COLOR } from '../../config/config';

function ButtonSeclect(props) {
    const styleBtn = props.isActive ? [styles.normal, styles.active] : styles.normal;
    return (

        <Text 
            onPress={() => props.onActive(props.id)}
            style={styleBtn}
        >
            {props.children}
        </Text>
    ) 
}

const styles = StyleSheet.create({
    normal: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#eee',
        marginLeft: 5,
        marginRight: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        minWidth: 70,
        textAlign: 'center',
    },
    active: {
        backgroundColor: COLOR.primary,
        color: '#fff',
        borderColor: COLOR.primary
    }
});

export default ButtonSeclect;
