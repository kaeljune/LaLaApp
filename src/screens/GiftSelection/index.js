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
        <View>
          <Image
            source={item.images}
            style={{ height: (config.HEIGHT_SCREEN * 0.75) * 0.4, width: config.WIDTH_SCREEN - 80 }}
          />

          <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400', color: '#313131', marginBottom: 10, lineHeight: 30 }}>{item.name}</Text>
            <Text style={{ color: '#777', fontSize: 14, fontWeight: '700', marginBottom: 10 }}>by Alex</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, marginVertical: 20 }}>$109</Text>
            
            <Btn 
              bgColor={config.COLOR.secondary}
              style={{ borderRadius: 3 }}
              title="GIFT NOW"
            />

          </View>
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
          firstItem={this.state.activeSlide}
          renderItem={this.renderItem}
          sliderWidth={config.WIDTH_SCREEN}
          itemWidth={config.WIDTH_SCREEN - 60}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          activeSlideOffset={0}
          enableSnap={true}
          inactiveSlideScale={0.95}
          enableMomentum={false}o
          scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
          slideStyle={{ flexDirection: 'row', paddingHorizontal: 10, marginVertical: 30, paddingBottom: 10, height: config.HEIGHT_SCREEN * 0.75, width: config.WIDTH_SCREEN - 60, alignItems: 'center', }}
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
    // minHeight: config.HEIGHT_SCREEN * 0.75
    // flex: 1,
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
