import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
            return (
            <TouchableOpacity onPress={this.downQuality} style={styles.quantityAction}>
                <Text style={{ color: '#ddd', fontSize: 17, fontWeight: '100' }}>-</Text>
            </TouchableOpacity>);
        }
        return <View style={styles.quantityAction}><Text style={{ color: '#ddd', fontSize: 17, fontWeight: '100' }}>-</Text></View>;
    }

    render() {
        const { name, price } = this.props;
        return (
            <View style={styles.itemStyle}>
                <View style={{ width: 100, height: 100, backgroundColor: '#eee' }} />
                <View style={{ marginHorizontal: 15, flex: 1, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: '600', fontSize: 17 }}>
                            {name}
                        </Text>

                        <Text style={{ marginTop: 5, color: '#454553', fontSize: 14 }}>
                            by <Text style={{ fontWeight: '600' }}>Maria</Text>
                        </Text>
                    </View>

                    <Text style={{ color: COLOR.secondary, fontWeight: '600' }}>${price}</Text>
                </View>   

                <View style={styles.quantityStyle}>
                    <TouchableOpacity style={styles.quantityAction} onPress={this.upQuality}>
                        <Text style={{ color: '#ddd', fontSize: 17, fontWeight: '100' }}>+</Text>
                    </TouchableOpacity>
                    
                    <View >
                        <Text style={{ fontWeight: '100', color: '#313131', fontSize: 17, }}>{this.state.total}</Text>
                    </View>

                    {this.renderBtn()}
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
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    quantityStyle: {
        height: 100,
        width: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quantityAction: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderRadius: 20,
        borderColor: '#ddd',
        borderWidth: 1
        // backgroundColor: COLOR.primary
    },
    quantityActionDisable: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: COLOR.primary,
        borderRadius: 20,
        borderWidth: 1,
        height: 30,
        width: 30,
    }
});

export default ProductList;

