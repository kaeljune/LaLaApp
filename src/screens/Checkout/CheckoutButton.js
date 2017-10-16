import React from 'react';
import { COLOR } from '../../config/config';
import Btn from '../../components/Btn';

function CheckoutButton(props) {
    return (
        <Btn 
            title="CHECKOUT"
            bgColor={COLOR.primary}
            onPress={props.onPress}
        />
    );
}
export default CheckoutButton;
