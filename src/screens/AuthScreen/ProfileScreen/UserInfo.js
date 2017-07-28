import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
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

const UserInfo = () => (
    <List containerStyle={styles.list}>
        {
            listProfile.map((item, i) => (
                <ListItem
                    hideChevron
                    key={i}
                    subtitle={
                        <View style={styles.row}>
                            <Text style={styles.label}>{item.title}</Text>
                            <Text style={{ fontSize: 18 }}>{item.rightTitle}</Text>
                        </View>
                    }
                />
            ))
        }
    </List>
);

const styles = StyleSheet.create({
    list: {
    },
    row: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontSize: 12,
        color: '#5a5a5a'
    }
});

export default UserInfo;
