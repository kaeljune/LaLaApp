import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BoxSelect extends Component {
    state = {
        active: false
    }
    render() {
        return (
            <View style={[styles.box, { backgroundColor: this.props.color }]}>
               <Text style={styles.text}>{this.props.children}</Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: 100,
        borderRadius: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#eee',
        alignItems: 'center',
        margin: 5
    },
    text: {
        color: '#fff',
        fontWeight: '600'
    }
});

export default BoxSelect;
