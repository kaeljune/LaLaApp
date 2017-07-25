import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const SignoutButton = () => 
    <TouchableOpacity>        
        <View style={styles.wrapBtn}>
            <Text>Sign Out</Text>
        </View>
    </TouchableOpacity>;

const styles = StyleSheet.create({
    wrapBtn: {
        backgroundColor: '#fff',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderColor: '#ddd',
        borderTopWidth: 1,
        borderBottomWidth: 1
    }
});

export default SignoutButton;
