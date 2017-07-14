import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import avatar from '../../../assets/images/avatar.png';

const { width } = Dimensions.get('window');

class FindAGift extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Find a Gift',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
        />,
        headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
            <Icon
                size={15}
                name='chat'
                color='#FF5700'
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 5, color: '#FF5700' }}>Chat</Text>
        </View>
    })
    render() {
        const { sectionHead, sectionList, sectionContainer, marginB } = styles;
        return (
            <ScrollView>

                <View style={[sectionContainer, marginB]}>
                    <View style={sectionHead}>
                        <Image 
                            style={{ width: 100, height: 100, marginBottom: 15 }} 
                            source={avatar} 
                        />
                        <Text>Hai Nguyen</Text>
                        <Text>Birthday | $200-500</Text>
                    </View>
                </View>

                <View style={sectionContainer}>
                    <View>
                        <View style={sectionList}>
                            <View style={{ width: 1, backgroundColor: '#ddd' }} />
                            <View style={styles.dot} />
                            <View style={{ paddingBottom: 15 }}>
                                <Text style={styles.listTitle}>LOOKING</Text>
                                <Text>
                                    We’ll report back promptly with wonderful gifts for HAI NGUYEN.
                                </Text>
                            </View>
                        </View>

                        <View style={sectionList}>
                            <View style={{ width: 1, backgroundColor: '#ddd' }} />
                            <View style={styles.dot} />
                            <View style={{ paddingBottom: 15 }}>
                                <Text style={styles.listTitle}>GIFTS READY</Text>
                            </View>
                        </View>

                        <View style={sectionList}>
                            <View style={{ width: 1, backgroundColor: '#ddd' }} />
                            <View style={styles.dot} />
                            <View style={{ paddingBottom: 15 }}>
                                <Text style={styles.listTitle}>ORDERED</Text>
                            </View>
                        </View>

                        <View style={sectionList}>
                            <View style={{ width: 1, backgroundColor: '#ddd' }} />
                            <View style={styles.dot} />
                            <View style={{ paddingBottom: 15 }}>
                                <Text style={styles.listTitle}>SHIPPED</Text>
                            </View>
                        </View>
                        <View style={sectionList}>
                            <View style={{ width: 1, backgroundColor: '#ddd' }} />
                            <View style={styles.dot} />
                            <View style={{ paddingBottom: 15 }}>
                                <Text style={styles.listTitle}>DELEVERED</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <Button
                        raise
                        title="DONE"
                        icon={{ name: 'done', size: 20 }}
                        backgroundColor="#11b8ab"
                        buttonStyle={{
                            width: 150,
                            height: 50,
                            marginTop: 30,
                            marginBottom: 20
                        }}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        padding: 15
    },

    marginB: {
        marginBottom: 15
    },

    sectionContainer: {
        display: 'flex',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    sectionHead: {
        padding: 15,
        width: width - 100,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    sectionList: {
        paddingLeft: 5,
        paddingRight: 5,
        width: width - 100,
        flexDirection: 'row',

    },

    listTitle: {
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#11b8ab'
    },

    dot: {
        width: 16,
        height: 16,
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        top: 2,
        left: -8,
        marginRight: 10,
        backgroundColor: '#fff'
    }
});


export default FindAGift;