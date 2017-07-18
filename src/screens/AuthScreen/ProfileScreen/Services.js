import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

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
