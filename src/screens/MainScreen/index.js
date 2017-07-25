import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';
import { COLOR } from '../../config/config';

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
                        <View style={{ flexDirection: 'row',}}>
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
    render() {
        if (this.props.libraries.auth.user) {
            console.log(this.props.libraries.auth.user); 
        }
        return (
            <View style={styles.container}>
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
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

const mapStateToProps = auth => ({ libraries: auth });

export default connect(mapStateToProps)(MainScreen);
