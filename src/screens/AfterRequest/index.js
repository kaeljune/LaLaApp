import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

import { Icon, Button } from 'react-native-elements';

import avatar from '../../../assets/images/avatar.png';

const { width } = Dimensions.get('window');

class AfterRequest extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'After Request',
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
        const { wraper, sectionHead, sectionChat, chatText, cirleIcon } = styles;
        return (
            <View style={wraper}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={sectionHead}>
                        <Image 
                            style={{ width: 100, height: 100, marginBottom: 15 }} source={avatar} 
                        />
                        <Text>Hai Nguyen</Text>
                        <Text style={{ marginBottom: 30 }}>Birthday | $200-500</Text>
                    </View>
                </View>
               
                <View style={{ alignItems: 'center' }}>
                    <Button
                        title="LOOKING"
                        onPress={this.onGetStarted}
                        backgroundColor="#11b8ab"
                        buttonStyle={{
                            width: 100,
                            height: 35,
                            top: -48,
                            marginTop: 30
                        }}
                    />
                </View>


                <View style={sectionChat}>
                    <View style={cirleIcon}>
                        <Icon
                            size={15}
                            name='more'
                            color='#fff'
                        />
                    </View>
                    <View style={chatText}>
                        <Text>We are on it.</Text>
                        <Text>
                            We’ll report back promptly with wonderful with wonderfull gifts for HAI NGUYEN. Maenwhile, chat with us should you have any questions.
                        </Text>    
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
                            marginTop: 30
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        padding: 15
    },

    sectionHead: {
        padding: 15,
        width: width - 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center'
    },

    sectionChat: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    chatText: {
        width: width - 75,
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 30
    },

    cirleIcon: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#11b8ab',
        marginRight: 15,
        marginBottom: -15,
        flexDirection: 'column',
        justifyContent: 'center'
    }


});

export default AfterRequest;
