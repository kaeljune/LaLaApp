import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import _ from 'lodash';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import ProgressiveImage from 'react-native-progressive-image';

<<<<<<< HEAD
// import Spinner from '../../components/Spinner';
import { fetchGift, addQuantity, fetchCart } from '../../actions';

=======
import { fetchGift } from '../../actions';
>>>>>>> 054d9bb1c108fb569a6c93ce1a46d988609e26b2
import * as config from '../../config/config';
// import progress from '../../../assets/images/progress.jpg';

import CardGift from './CardGift';

class GiftSelection extends PureComponent {
  static navigationOptions = () => ({
    title: 'Local Products Selection',
    headerTintColor: config.COLOR.primary,
    headerTitleStyle: config.headerTitleStyle,
    headerStyle: config.headerStyle,
    headerRight: (
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
          <View style={{ padding: 5 }}>
            <Icon name="card-giftcard" size={25} color="#858585" />
            <View style={styles.card}>
              <Text style={{ color: '#fff', fontSize: 10 }}>01</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  })

  constructor(props) {
    super(props);

    this.state = {
      entries: this.props.items,
      activeSlide: 0,
    };
  }

  componentWillUpdate(nextProps) {
    this.state = {
      entries: nextProps.items,
    };
  }


  get pagination() {
    const { activeSlide, entries } = this.state;
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

  renderItem = ({ item }) => (
<<<<<<< HEAD
    <View style={[styles.slide, styles.boxShadow]}>
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('detailgift', { user: this.props.navigation.state.params.user });
          this.props.fetchGift(item.uid);
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={{ padding: 20, flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('detailgift', { user: this.props.navigation.state.params.user });
            this.props.fetchGift(item.uid);
          }}
        >
          <Text
            style={{ fontSize: 25, fontWeight: '100', color: '#313131', marginBottom: 20 }}
          >{item.name}</Text>

          <Text style={{ color: '#777', fontSize: 17 }}>by {item.artisan ? item.artisan : 'Baza'}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Text style={{ fontWeight: '700', fontSize: 20, marginLeft: 20 }}>{item.price}</Text>
        <TouchableOpacity
          onPress={async () => {
            await this.props.fetchGift(item.uid);
            await this.props.addQuantity(this.props.cardActive, item.uid);
            await this.props.navigation.navigate(
              'checkout',
              { user: this.props.navigation.state.params.user });
          }}
        >
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
            <Icon name="add" size={17} color="#fff" />
            <Text
              style={{ color: '#fff', fontWeight: '400', fontSize: 14, marginLeft: 5 }}
            >Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
=======
    <CardGift
      onPress={() => {
        this.props.navigation.navigate('detailgift', { user: this.props.navigation.state.params.user });
        this.props.fetchGift(item.uid);
      }}
      onAddCart={async () => {
        await this.props.fetchGift(item.uid);
        await this.props.navigation.navigate(
          'checkout',
          { user: this.props.navigation.state.params.user });
      }}

      item={item}
    />
>>>>>>> 054d9bb1c108fb569a6c93ce1a46d988609e26b2
  );

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          props={this.props}
          data={this.state.entries}
          firstItem={this.state.activeSlide}
          renderItem={this.renderItem}
          sliderWidth={config.WIDTH_SCREEN}
          itemWidth={config.WIDTH_SCREEN - 60}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          activeSlideOffset={0}
          enableSnap
          inactiveSlideScale={0.95}
          removeClippedSubviews={false}
          enableMomentum={false}
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
        shadowColor: 'rgba(0,0,0,0.3)',
				shadowOffset: { height: 0, width: 0 },
				shadowOpacity: 1,
				shadowRadius: 5,
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
  },
  card: {
    height: 20,
    width: 20,
    backgroundColor: config.COLOR.secondary,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: -5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  const items = _.map(state.listRequest.listGift, (val, uid) => ({ ...val, uid }));
  const cardActive = state.listRequest.cardActive;
  const auth = state.fetchAcc;
  return { items, cardActive, auth };
};

export default connect(mapStateToProps, { fetchGift, addQuantity, fetchCart })(GiftSelection);
