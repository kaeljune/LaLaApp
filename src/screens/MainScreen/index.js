import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';


class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Gifts',
        headerLeft: <View>
                        <View style={{ display: 'plex', flexDirection: 'row' }}>
                            <Text>0</Text>
                            <Text>total</Text>
                        </View>
                    </View>,
        headerRight: <Icon
                    reverse
                    reverseColor="white"
                    name='person-outline'
                    color='#11b8ab'
        />
    })
    render() {
        if (this.props.libraries.auth.user) {
        console.log(this.props.libraries.auth.user); 
}
        return (
            <View style={styles.container}>
            <Icon
                reverse
                raised
                reverseColor="white"
                name='add'
                color='#11b8ab'
            />
            <Text>FIND A GIFT</Text>
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
  },
  h1: {
      fontSize: 50,
      marginBottom: 20
  },
  h3: {
      fontSize: 30,
      marginBottom: 20
  },
  textStyle: {
      textAlign: 'center',     
  }
});

const mapStateToProps = auth => ({ libraries: auth });

export default connect(mapStateToProps)(MainScreen);
