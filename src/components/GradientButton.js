import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';

class GradientButton extends Component {
    renderIcon() {
        if (this.props.icon) {
            return (
                <Icon
                    name={this.props.icon}
                    color='#FFFFFF'
                    size={16}
                    containerStyle={{ marginRight: 5 }}
                />
            );
        }
    }
    renderText() {
        if (this.props.title) {
            return (
                <Text style={styles.textStyle}>
                    {this.props.title}
                </Text>
            );
        }
    }
    render() {
        const { linearStyle, wraperStyle } = styles;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <LinearGradient
                    colors={this.props.colors}
                    start={this.props.start}
                    end={this.props.end}
                    style={linearStyle}
                >
                    <View style={wraperStyle}>
                        {this.renderIcon()}
                        {this.renderText()}
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    linearStyle: {
        width: 200,
        height: 50,
        padding: 15,
        alignItems: 'center',
        marginTop: 100
    },
    wraperStyle: {
        flexDirection: 'row'
    },
    textStyle: {
        backgroundColor: 'transparent',
        fontSize: 16,
        color: '#FFFFFF',
    }
});
export default GradientButton;

