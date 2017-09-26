import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { Icon } from 'react-native-elements';
import * as config from '../../config/config';

import Btn from '../../components/Btn';

import product from '../../../assets/images/fdsf.jpg';
import product1 from '../../../assets/images/product1.jpg';
import product2 from '../../../assets/images/product2.jpg';

const items = [
  {
    name: 'The Levante backpack',
    price: '$500USD',
    images: product,
    detail: {

    }
  },
  {
    name: 'The "nhacohainguoi" teapot set',
    price: '$25.00',
    images: product1,
    detail: {

    }
  },
  {
    name: 'Bag',
    price: '$35.00',
    images: product2,
    detail: {

    }
  },
  {
    name: 'Bag',
    price: '$500USD',
    images: product,
    detail: {

    }
  },
  {
    name: 'Bag',
    price: '$500USD',
    images: product,
    detail: {

    }
  },

];

class GiftSelection extends Component {
  static navigationOptions = () => ({
    title: 'Gift selection'
  })

  state = {
    xOffset: new Animated.Value(1)
  }

  rotateTransform = (index) => {
    return {
      transform: [
        {
          scale: this.state.xOffset.interpolate({
            inputRange: [(index - 1) * config.WIDTH_SCREEN, index * config.WIDTH_SCREEN, (index + 1) * config.WIDTH_SCREEN],
            outputRange: [0.6, 1, 0.6],
          })
        },
        // {
        //   rotateY: this.state.xOffset.interpolate({
        //     inputRange: [(index - 1) * config.WIDTH_SCREEN, index * config.WIDTH_SCREEN, (index + 1) * config.WIDTH_SCREEN],
        //     outputRange: ['10deg', '0deg', '-10deg']
        //   }),
        // }
      ],

      opacity: this.state.xOffset.interpolate({
        inputRange: [(index - 1) * config.WIDTH_SCREEN, index * config.WIDTH_SCREEN, (index + 1) * config.WIDTH_SCREEN],
        outputRange: [0.6, 1, 0.6],
      })
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Animated.ScrollView
          horizontal
          pagingEnabled
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.state.xOffset } } }],
            { useNativeDriver: true })}
        >
          {
            items.map((item, index) => (
              <Animated.View style={[styles.product, this.rotateTransform(index)]} key={index}>
                <View>
                  <View
                    style={{
                      marginBottom: 25,
                      paddingTop: 60
                    }}
                  >

                    <Animated.View
                      style={{
                        paddingTop: 250,
                        paddingBottom: 15,
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderColor: '#ddd',
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ fontWeight: '700', color: '#b79487', fontSize: 12 }}>BY ALEX</Text>
                      <Text style={{ fontWeight: '700', fontSize: 20, color: '#313131', marginVertical: 5 }}>The 3xu love matchbox</Text>
                      <Text style={{ fontWeight: '400', fontSize: 18, color: '#444', marginBottom: 20 }}>$ 2.0</Text>
                    </Animated.View>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('detailgift')}>

                      <Animated.Image
                        resizeMode='cover'
                        style={{
                          width: config.WIDTH_SCREEN - 72,
                          height: 300,
                          borderRadius: 5,
                          position: 'absolute',
                          zIndex: 999,
                          left: 15,
                          top: 0
                        }}
                        source={item.images}
                      />
                    </TouchableWithoutFeedback>

                  </View>

                  <Animated.View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: ((config.WIDTH_SCREEN - 40) / 2) - 90
                    }}
                  >
                    <Btn
                      title="Gift Now"
                      style={{ width: 150 }}
                      bgColor={config.COLOR.primary}
                      onPress={() => this.props.navigation.navigate('checkout')}
                    />
                  </Animated.View>
                </View>
              </Animated.View>
            ))
          }
        </Animated.ScrollView>

        <View style={{ height: 45, borderTopColor: '#ddd', backgroundColor: '#fff', borderTopWidth: 1 }} />
        <View
          style={{
            position: 'absolute',
            bottom: 2,
            right: (config.WIDTH_SCREEN / 2) - 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >


          <Icon
            raised name="add" color={config.COLOR.primary}
            containerStyle={{ backgroundColor: '#fff' }}
            onPress={() => console.log(1)}
          />


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  product: {
    width: config.WIDTH_SCREEN - 40,
    marginTop: 20,
    marginHorizontal: 20,
  }
});

export default GiftSelection;
