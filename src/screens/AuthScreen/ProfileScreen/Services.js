import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

import { COLOR } from '../../../config/config';

const listLink = [
    {
        title: 'Payment',
    },
    {
        title: 'My Address',
    },
    {
        title: 'Terms & Privacy',
    },
    {
        title: 'Helps',
    },
];

class Services extends Component {
    render() {
        return (
            <List>
                {
                    listLink.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            chevronColor={COLOR.secondary}
                        //leftIcon={{ name: item.icon }}
                        //rightIcon={{ name: 'play-arrow' }}
                        />
                    ))
                }
            </List>
        );
    }
}

export default Services;
