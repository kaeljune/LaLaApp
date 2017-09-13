import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLOR } from '../../config/config';

class TagSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    // onPress = (interest) => {
    //     this.setState(prevState => ({ active: !prevState.active }));
    //     this.props.onTagPress(interest);
    // }
    render() {
        const styleTag = this.state.active ? [styles.tag, styles.active] : [styles.tag];
        return (
            <Text
                style={styleTag} 
                onPress={() => {
                    this.props.onTagPress(this.props.children);
                    this.setState(prevState => ({ active: !prevState.active }));
                    }
                }
            >
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    tag: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        minWidth: 50,
        textAlign: 'center',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 20,
        margin: 5
    },
    active: {
        borderColor: COLOR.primary,
        color: COLOR.primary
    }
});

export default TagSelect;

