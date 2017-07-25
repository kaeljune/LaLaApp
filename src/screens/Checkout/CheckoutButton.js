import React from 'react';
import { View } from 'react-native';

import Btn from '../../components/Btn';

const CheckoutButton = (props) => 
    
    <View style={{ marginTop: 25 }}>
        <Btn 
            colors={['#11B8AB', '#65C5B9']}
            start={[0, 0.5]}
            end={[1, 0.5]}
            onPress={props.onPress}
        >CHECKOUT</Btn>
    </View>;

export default CheckoutButton;
