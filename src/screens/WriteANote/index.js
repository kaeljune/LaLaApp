import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import Btn from '../../components/Btn';
import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';
import avatar from '../../../assets/images/avatar.png';

class WriteANote extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Write a Note',
        headerStyle, 
        headerTitleStyle,
        // headerLeft: <Icon
        //     name='chevron-left'
        //     color='#11b8ab'
        //     onPress={() => navigation.goBack()}
        // />
    })

    render() {
        return (
            <View style={styles.wraper}>
                <View style={[styles.sectionContainer]}>
                    <View style={styles.sectionHead}>
                        <Avatar
                            height={120}
                            width={120}
                            rounded
                            containerStyle={{ marginBottom: 15 }}
                            source={avatar}
                        />
                        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>Hai Nguyen</Text>
                        <Text>for Birthday</Text>
                    </View>

                    <View style={{ zIndex: 2, justifyContent: 'center', width: 35, height: 35, backgroundColor: '#FF5700', borderRadius: 20 }}>
                        
                        <Icon
                            size={15}
                            name='comment'
                            color='#fff'
                        />
                       
                    </View>

                    <View 
                        style={{
                            top: -17,
                            padding: 15,
                            width: WIDTH_SCREEN - 60,
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderColor: '#eee',
                            borderWidth: 1
                        }}
                    >
                        <Text style={{ color: '#11b8ab', marginTop: 30 }}>HANDWRITTEN NOTE</Text>
                        <TextInput 
                            multiline
                            style={{ textAlign: 'center', width: WIDTH_SCREEN - 90 }}
                            numberOfLines={7}
                            underlineColorAndroid="transparent"
                            placeholder="Why are you giving this gift?"
                        />
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 30 }}>
                        
                    <Btn 
                        title="NEXT"
                        bgColor={COLOR.primary}
                    />
                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sectionHead: {
        padding: 15,
        width: WIDTH_SCREEN,
        alignItems: 'center'
    },
});

export default WriteANote;
