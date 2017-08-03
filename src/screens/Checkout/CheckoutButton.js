import React from 'react';
import { View } from 'react-native';

import Btn from '../../components/Btn';

const CheckoutButton = (props) => 
    
    
    <Btn 
        title="CHECKOUT"
        bgColor="#11B8AB"
        onPress={props.onPress}
    />;
    

export default CheckoutButton;
