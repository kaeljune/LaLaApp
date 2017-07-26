import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
            rounded
            title="TD"

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
        if (this.state.items.length > 0) {
            return (
               <View style={{ flex: 1 }}> 
                    <ScrollView contentContainerStyle={{ padding: 8 }}>
                    
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', paddingBottom: 50 }}>
                        
                    {this.state.items.map((item, i) => (
                        <View 
                            key={i} 
                            style={{ 
                                backgroundColor: '#fff', 
                                borderRadius: 3, 
                                borderColor: '#eee',
                                borderWidth: 1,
                                margin: 8,
                                padding: 10,
                                width: (WIDTH_SCREEN / 2) - 24
                            }}
                        >
                            <Text style={{ fontSize: 18 }}>{item.name}</Text>
                            <Text style={{ fontSize: 14, marginVertical: 10 }}>for {item.purpose}</Text>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>{item.price}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                <Avatar 
                                    icon={{ name: 'person' }}
                                    overlayContainerStyle={{ backgroundColor: COLOR.primary }}
                                    rounded
                                    height={35}
                                    width={35}
                                />
                                <Text style={{ backgroundColor: COLOR.secondary, fontSize: 12, color: '#fff', paddingVertical: 3, paddingHorizontal: 7, borderRadius: 3 }}>{item.status}</Text>
                            </View>
                        </View>
                    ))}
                    </View>
                    </ScrollView>        

                    <View style={{ position: 'absolute', bottom: 0, width: WIDTH_SCREEN, alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Icon
                                size={20}
                                reverse
                                raised
                                reverseColor="white"
                                name='add'
                                color='#11b8ab'
                            />
                        </TouchableOpacity>
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
                <TouchableOpacity>
                    <Icon
                        reverse
                        raised
                        reverseColor="white"
                        name='add'
                        color='#11b8ab'
                    />
                </TouchableOpacity>
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
    backgroundColor: '#f8f8f8',
    // alignItems: 'center',
    // flexDirection: 'column',
    // justifyContent: 'center',
  }
});

const mapStateToProps = auth => ({ libraries: auth });

export default connect(mapStateToProps)(MainScreen);
