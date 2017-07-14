import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

class ButtonSeclect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    changeActive = () => {
        console.log(123231)
    }
    render() {
        const { children } = this.props
        return (
            <View>
                <Text style={this.state.active ? styles.active : styles.normal}>{children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    normal: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#eee',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 0,
        padding: 10,
        minWidth: 60,
        textAlign: 'center',
        fontSize: 12
    },
    active: {
        borderWidth: 1,
        backgroundColor: '#11b8ab',
        borderColor: '#eee',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 0,
        padding: 10,
        minWidth: 60,
        textAlign: 'center',
        fontSize: 12
    }
})

export default ButtonSeclect