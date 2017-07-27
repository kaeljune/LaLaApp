import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class ButtonSeclect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    onPress = () => {
        this.setState(previousState => {
            return { active: !previousState.active };
        });
    }
    render() {
        const { children } = this.props;
        const styleBtn = this.state.active ? [styles.normal, styles.active] : styles.normal;
        return ( 
            <Text 
                onPress={this.onPress}
                style={styleBtn}
            >
                {children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    normal: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#eee',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        minWidth: 70,
        textAlign: 'center',
    },
    active: {
        backgroundColor: '#11b8ab',
        color: '#fff'
    }
});

export default ButtonSeclect;
