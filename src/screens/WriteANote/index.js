import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import avatar from '../../../assets/images/avatar.png';

const { width, height } = Dimensions.get('window');

class WriteANote extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Write a Note',
        headerLeft: <Icon
            name='chevron-left'
            color='#11b8ab'
            onPress={() => navigation.goBack()}
        />
    })

    render() {
        return (
            <View style={styles.wraper}>
                <View style={[styles.sectionContainer]}>
                    <View style={styles.sectionHead}>
                        <Image style={{ width: 100, height: 100, marginBottom: 15 }} source={avatar} />
                        <Text>Hai Nguyen</Text>
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
                        width: width - 60,
                        alignItems: 'center',
                        backgroundColor: '#fff'
                    }}
                    >
                        <Text style={{ color: '#11b8ab', marginTop: 30 }}>HANDWRITTEN NOTE</Text>
                        <TextInput 
                            multiline
                            style={{ textAlign: 'center', width: width - 90 }}
                            numberOfLines={7}
                            placeholder="Why are you giving this gift?"
                        />
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Button
                        raise
                        title="NEXT"
                        backgroundColor="#11b8ab"
                        buttonStyle={{
                            width: 150,
                            height: 50,
                            marginTop: 20,
                            marginBottom: 20
                        }}
                    />
                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sectionHead: {
        padding: 15,
        width,
        alignItems: 'center'
    },
});

export default WriteANote;
