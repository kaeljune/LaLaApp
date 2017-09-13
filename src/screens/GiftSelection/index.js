import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Image, Platform } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

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
    title: 'Gift selection'
  })

  state = {
    entries: items,
    activeSlide: 0
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
        inactiveDotStyle={{}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}

      />
    );
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={[styles.slide, styles.boxShadow]}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('detailgift')}>
          <Image
            source={item.images}
            style={styles.image}
          />
        </TouchableWithoutFeedback>

        <View style={{ padding: 20, flex: 1 }}>
          <Text style={{ fontSize: 25, fontWeight: '100', color: '#313131', marginBottom: 20 }}>{item.name}</Text>

          <Text style={{ color: '#777', fontSize: 17 }}>by Alex</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: '700', fontSize: 20, marginLeft: 20 }}>$109</Text>

          <TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', backgroundColor: config.COLOR.secondary, borderColor: config.COLOR.secondary, borderWidth: 1, padding: 15 }}>
              <Icon name="add" size={17} color="#fff" />
              <Text style={{ color: '#fff', fontWeight: '400', fontSize: 14, marginLeft: 5 }}>GIFT NOW</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>
    );
  };

 
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          props={this.props}
          ref={(c) => { this._carousel = c; }}
          data={items}
          renderItem={this.renderItem}
          sliderWidth={config.WIDTH_SCREEN}
          itemWidth={config.WIDTH_SCREEN - 60}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={0.8}
          enableMomentum={false}
          slideStyle={{ paddingHorizontal: 10, marginTop: 20, paddingBottom: 10, width: config.WIDTH_SCREEN - 60 }}

        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '100', color: '#fff' }}>
            {this.state.activeSlide + 1}<Text style={{ fontSize: 14 }}> / {items.length}</Text></Text>
          {this.pagination}
          <Icon name="playlist-add" raised size={20} containerStyle={{ margin: 0 }} />
        </View>
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
    backgroundColor: '#fff',
    flex: 1,
    // marginVertical: 25
    // alignItems: 'center',
  },
  boxShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .7)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 6,
      },
      android: {
        elevation: 6
      },
    }),
  },
  image: {
    width: config.WIDTH_SCREEN - 60,
    height: 250
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
