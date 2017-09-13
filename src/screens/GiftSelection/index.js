import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Image, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';

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
    header: null
    // title: 'Gift selection'
  })

  state = {
    entries: items,
    activeSlide: 0
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <Image
          source={item.images}
          style={styles.image}
        /> 
        <View style={{ alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginVertical: 10 }}>{item.name.toUpperCase()}</Text>
          <Text style={{ color: '#777' }}>by Alex</Text>
          <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 20 }}>$109</Text>
        </View>
      </View>
    );
  }
  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}

      />
    );
  }
  render() {
    return (
      <View style={styles.container}>

        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={items}
          renderItem={this._renderItem}
          sliderWidth={config.WIDTH_SCREEN}
          itemWidth={config.WIDTH_SCREEN - 60}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={0.8}
          enableMomentum={false}
          slideStyle={{ paddingTop: 30, paddingHorizontal: 10, width: config.WIDTH_SCREEN - 60 }}
         
        />
        {this.pagination}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.COLOR.primary
  },

  slide: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  boxShadow: {
		...Platform.select({
			ios: {
				shadowColor: 'rgba(0,0,0, .7)',
				shadowOffset: { height: 0, width: 0 },
				shadowOpacity: 1,
				shadowRadius: 10,
			},
			android: {
				elevation: 10
			},
		}),
	},
  image: {
    width: config.WIDTH_SCREEN - 60,
    height: 300
    // height: config.HEIGHT_SCREEN - 150
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 15,
  }
});

export default GiftSelection;
