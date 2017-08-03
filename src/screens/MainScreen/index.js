import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';
import { COLOR, WIDTH_SCREEN } from '../../config/config';

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Gifts',
        headerStyle: {
            paddingHorizontal: 10
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },

        headerLeft: <View>
            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={{
                        backgroundColor: COLOR.secondary,
                        paddingHorizontal: 5,
                        paddingVertical: 1,
                        borderRadius: 20,
                        minWidth: 20,
                        textAlign: 'center',
                        color: '#fff',
                        marginRight: 5
                    }}
                >
                    01
                </Text>
                <Text>total</Text>
            </View>
        </View>,
        headerRight: <Avatar
            width={37}
            height={37}
            overlayContainerStyle={{ backgroundColor: COLOR.primary }}
            rounded
            title="HN"
        />
    })

    state = {
        items: [
            {
                name: 'Hai Nguyen',
                purpose: 'Birthday',
                price: '$500',
                status: 'Gift ready'
            },
            {
                name: 'Hai Nguyen',
                purpose: 'Birthday',
                price: '$500',
                status: 'Gift ready'
            },
            {
                name: 'Hai Nguyen',
                purpose: 'Birthday',
                price: '$500',
                status: 'Gift ready'
            },
            {
                name: 'Hai Nguyen',
                purpose: 'Birthday',
                price: '$500',
                status: 'Gift ready'
            },

            {
                name: 'Hai Nguyen',
                purpose: 'Birthday',
                price: '$500',
                status: 'Gift ready'
            },
        ]
    }
    
    renderList = () => {
        const { items } = this.state;
        if (items.length > 0) {
            return (
                <View style={{ flex: 1, paddingBottom: 40 }}>
                    <ScrollView contentContainerStyle={{ padding: 8 }}>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingBottom: 50 }}>

                            {items.map((item, i) => (
                                <View
                                    key={i}
                                    style={{
                                        backgroundColor: '#fff',
                                        borderRadius: 3,
                                        borderColor: '#ddd',
                                        borderWidth: 1,
                                        margin: 8,
                                        width: (WIDTH_SCREEN / 2) - 24,
                                    }}
                                >
                                    <View style={{ paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center' }}>
                                        <Avatar
                                            icon={{ name: 'person' }}
                                            overlayContainerStyle={{ backgroundColor: COLOR.primary }}
                                            rounded
                                            height={50}
                                            width={50}
                                        />
                                        <Text style={{ fontSize: 18, marginTop: 7 }}>{item.name}</Text>
                                        <Text style={{ fontSize: 14, marginVertical: 7, color: '#838478' }}>for {item.purpose}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '600' }}>{item.price}</Text>
                                        <Text
                                            style={{
                                                backgroundColor: COLOR.secondary,
                                                fontSize: 12,
                                                color: '#fff',
                                                marginTop: 7,
                                                paddingVertical: 3,
                                                paddingHorizontal: 7,
                                                borderRadius: 2
                                            }}
                                        >{item.status}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon
                                            reverse
                                            raised
                                            reverseColor={COLOR.primary}
                                            name="chevron-right"
                                            size={16}
                                            color="#fff"
                                        />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.bottomView}>

                        <Icon
                            size={25}
                            reverse
                            raised
                            reverseColor="white"
                            name="add"
                            color={COLOR.primary}
                            onPress={() => console.log('Add me')}
                        />

                    </View>
                </View>
            );
        }

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
               
                <Icon
                    reverse
                    raised
                    reverseColor="white"
                    name='add'
                    color={COLOR.primary}
                />
                
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>FIND A GIFT</Text>
            </View>
        );
    };

    render() {
        if (this.props.libraries.auth.user) {
            console.log(this.props.libraries.auth.user);
        }
        return (
            <View style={styles.container}>
                {this.renderList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'center',
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: WIDTH_SCREEN,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    }
});

const mapStateToProps = auth => ({ libraries: auth });

export default connect(mapStateToProps)(MainScreen);
