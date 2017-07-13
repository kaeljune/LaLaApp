import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Icon, Button, List, ListItem } from 'react-native-elements';

const listProfile = [
    {
        title: 'EMAIL',
        rightTitle: 'hainguyen@airlala.com',
    },
    {
        title: 'PHONE NUMBER',
        rightTitle: '(+84) 935 38 39 40',
    },
 // more items
];
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

class ProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: 'Account',
    headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
    />,
    headerRight: <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon
                        name='create'
                        color='#11b8ab'
                        onPress={() => navigation.goBack()}
                    />
                    <Text>Edit</Text>
                </View>
    })
    render() {
        return (
            <View>
                <Text>John Doe</Text>
                <Icon
                    reverse
                    reverseColor="white"
                    name='person-outline'
                    color='#11b8ab'
                />
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
                <List>
                    {
                        listLink.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            //leftIcon={{ name: item.icon }}
                            rightIcon={{ name: 'play-arrow' }}
                        />
                        ))
                    }
                </List>
                <Button 
                    title='Sign out'
                />
            </View>
        );
    }
}


export default ProfileScreen;
