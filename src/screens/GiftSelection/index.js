import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import _ from 'lodash';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { fetchGift } from '../../actions';

import * as config from '../../config/config';

class GiftSelection extends Component {
  static navigationOptions = () => ({
    title: 'Gift selection',
    headerRight: (
      <TouchableWithoutFeedback>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
          <Icon 
            name="filter-list" 
          />
          <Text style={{ marginLeft: 5 }}>Filter</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  })

  state = {
    entries: this.props.items,
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
  //renderItem = ({ item, index }) => (
  renderItem = ({ item }) => (
    <View style={[styles.slide, styles.boxShadow]}>
      <TouchableWithoutFeedback 
        onPress={() => {
          this.props.navigation.navigate('detailgift');
          this.props.fetchGift(item.uid);
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback 
        onPress={() => {
          this.props.navigation.navigate('detailgift');
          this.props.fetchGift(item.uid);
        }}
      >
        <View style={{ padding: 20, flex: 1 }}>
          <Text
            style={{ fontSize: 25, fontWeight: '100', color: '#313131', marginBottom: 20 }}
          >{item.name}</Text>

          <Text style={{ color: '#777', fontSize: 17 }}>by {item.artisan ? item.artisan : 'Baza'}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Text style={{ fontWeight: '700', fontSize: 20, marginLeft: 20 }}>{item.price}</Text>

        <TouchableWithoutFeedback>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: config.COLOR.secondary,
              borderColor: config.COLOR.secondary,
              borderWidth: 1,
              padding: 15,
            }}
          >
            <Icon name="card-giftcard" size={17} color="#fff" />
            <Text
              style={{ color: '#fff', fontWeight: '400', fontSize: 14, marginLeft: 5 }}
            >GIFT NOW</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

    </View>
  );


  render() {
    return (
      <View style={styles.container}>
        <Carousel
          props={this.props}
          ref={(c) => { this._carousel = c; }}
          data={this.props.items}
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
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 20, fontWeight: '100', color: '#fff' }}>
            {this.state.activeSlide + 1}
            <Text style={{ fontSize: 14 }}> / {this.props.items.length}</Text>
          </Text>
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
    // flex: 1,
    marginVertical: 25
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
    width: config.WIDTH_SCREEN - 80,
    minHeight: config.HEIGHT_SCREEN * 0.75 * 0.4
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

const mapStateToProps = state => {
  const items = _.map(state.listRequest.listGift, (val, uid) => ({ ...val, uid }));
  //const gifts = _.map(state.listRequest.listGift, (val, uid) => ({ ...val, uid }));
  const auth = state.fetchAcc;
  return { items, auth };
};

export default connect(mapStateToProps, { fetchGift })(GiftSelection);
