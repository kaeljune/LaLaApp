import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

const listProfile = [
    {
        title: 'EMAIL',
        rightTitle: 'hainguyen@airlala.com',
    },
    {
        title: 'PHONE NUMBER',
        rightTitle: '(+84) 935 38 39 40',
    },
];

class UserInfo extends Component {
    render() {
        return (
            <List>
                {
                    listProfile.map((item, i) => (
                        <ListItem
                            hideChevron
                            key={i}
                            title={item.title}
                            rightTitle={item.rightTitle}
                        />
                    ))
                }
            </List>
        );
    }
}

export default UserInfo;
