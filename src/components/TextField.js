import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLOR } from '../config/config';


const TextField = (props) => (
    <View style={{ marginBottom: 15 }}>
        {props.label ? (
            <Text style={styles.labelStyle}>{props.label}</Text>
        ) : (
            null
        )}
        <TextInput 
            {...props}
            style={{ 
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                paddingVertical: 5,
                height: 35,
            }}
            placeholderTextColor='#A8A8A8'
            underlineColorAndroid="transparent"
        />
    </View>
);

const styles = StyleSheet.create({
    labelStyle: {
        fontWeight: '300',
        color: COLOR.primaryFont
    }
});

export default TextField;
