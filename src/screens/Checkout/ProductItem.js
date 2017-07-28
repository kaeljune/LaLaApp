import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { WIDTH_SCREEN, COLOR } from '../../config/config';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            total: parseInt(this.props.total)
        });
    }

    upQuality = () => {
        this.setState(previousState => ({ total: parseInt(previousState.total + 1) }));
    }
    downQuality = () => {
        this.setState(previousState => ({ total: parseInt(previousState.total - 1) }));
    }

    renderBtn = () => {
        if (this.state.total > 0) {
            return (<Text onPress={this.downQuality}>-</Text>);
        }
        return <Text>-</Text>;
    }

    render() {
        return (
            <View style={styles.itemStyle}>
                <View style={{ width: 100, height: 80, backgroundColor: '#eee' }} />
                <View style={{ width: WIDTH_SCREEN - 190 }}>
                    <Text
                        style={{ fontWeight: 'bold', marginBottom: 10 }}
                    >
                        {this.props.name}
                        </Text>
                    <Text style={{ color: COLOR.secondary }}>$ {this.props.price}</Text>
                </View>
                <View style={styles.quantityStyle}>
                    <View style={styles.quantityAction}>
                        <Text onPress={this.upQuality}>+</Text>
                    </View>
                    <View style={styles.quantityAction}>
                        <Text onPress={this.upQ} style={{ color: COLOR.secondary }}>{this.state.total}</Text>
                    </View>
                    <View style={styles.quantityAction}>

                       {this.renderBtn()}
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    itemStyle: {
        backgroundColor: '#fff',
        width: WIDTH_SCREEN,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quantityStyle: {
        borderColor: '#eee',
        borderWidth: 1,
        flexDirection: 'column',
        width: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    quantityAction: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
    }
});

export default ProductList;

