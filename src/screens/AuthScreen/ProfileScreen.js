import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

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
        headerRight:
        <View 
            style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                paddingRight: 15 
            }}
        >
            <Icon
                name='create'
                size={15}
                color='#FF5700'
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 5, color: '#FF5700' }}>Edit</Text>
        </View>
    })
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'column', alignItems: 'center', height: 175 }}>

                    <Text
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#11b8ab',
                            height: 125,
                            color: '#fff',
                            paddingTop: 30,
                            width,
                            fontSize: 18,
                            fontWeight: 'bold',
                            zIndex: 1
                        }}
                    >
                        John Doe
                    </Text>

                    <View
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            top: -50,
                            zIndex: 2,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Icon
                            reverse
                            reverseColor="#11b8ab"
                            name='person-outline'
                            color='#fff'
                            size={45}
                        />
                    </View>

                </View>

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
                            //rightIcon={{ name: 'play-arrow' }}
                            />
                        ))
                    }
                </List>

                <List>
                    <ListItem title="Sign Out" />
                </List>

            </View>
        );
    }
}


export default ProfileScreen;
