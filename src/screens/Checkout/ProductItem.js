import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

import { WIDTH_SCREEN, COLOR } from '../../config/config';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            right: new Animated.Value(0),
            total: parseInt(this.props.total)
        });
    }

    upQuality = () => {
        this.setState(previousState => ({ total: previousState.total + 1 }));
    }
    downQuality = () => {
        this.setState(previousState => ({ total: previousState.total - 1 }));
    }

    renderBtn = () => {
        if (this.state.total > 0) {
            return (
            <TouchableOpacity onPress={this.downQuality} style={styles.quantityAction}>
                <Text style={{ color: '#999', fontSize: 17, fontWeight: '400' }}>-</Text>
            </TouchableOpacity>);
        }
        return <View style={styles.quantityActionDisable}><Text style={{ color: '#eee', fontSize: 17, fontWeight: '400' }}>-</Text></View>;
    }
  
    render() {
        const { name, price } = this.props;
        return (
            <View style={styles.itemStyle}>


                <View style={{ width: 90, height: 90, backgroundColor: '#eee' }} />
                <View style={{ marginHorizontal: 15, flex: 1, justifyContent: 'space-around' }}>
                    <View>
                        <Text style={{ fontWeight: '500', fontSize: 16 }}>
                            {name}
                        </Text>

                        <Text style={{ marginVertical: 5, color: '#777', fontSize: 14 }}>
                            by <Text style={{ fontWeight: '600' }}>Maria</Text>
                        </Text>
                    </View>

                    <Text style={{ color: COLOR.secondary, fontWeight: '600' }}>${price}</Text>
                </View>   

                <View style={styles.quantityStyle}>
                    <TouchableOpacity style={styles.quantityAction} onPress={this.upQuality}>
                        <Text style={{ color: '#999', fontSize: 17, fontWeight: '400' }}>+</Text>
                    </TouchableOpacity>
                    
                    <View>
                        <Text 
                            style={{ 
                            fontWeight: '600', 
                            color: COLOR.primary, 
                            fontSize: 20, 
                            }}
                        >{this.state.total}</Text>
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
        width: WIDTH_SCREEN - 30,
        marginHorizontal: 15,
        marginVertical: 7,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    quantityStyle: {
        height: 90,
        width: 40,
        borderLeftColor: '#eee',
        borderLeftWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    quantityAction: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 30,
        width: 40,
        //borderColor: '#999',
        //borderWidth: 1
    },
    quantityActionDisable: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 30,
        width: 40,
        //borderColor: '#eee',
        //borderWidth: 1
    }
});

export default ProductList;

