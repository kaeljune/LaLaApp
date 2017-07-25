import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { COLOR, WIDTH_SCREEN } from '../config/config';


const TextField = (props) => (
    <View>
        {props.label ? (
             <FormLabel labelStyle={styles.labelStyle}>
                {props.label}
            </FormLabel>
        ) : (
            null
        )}

        <FormInput 
            {...props}
            placeholderTextColor='#A8A8A8'  
            inputStyle={{ fontSize: 14 }}  
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
