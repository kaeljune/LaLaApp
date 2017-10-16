import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { WebBrowser } from 'expo';
import { Icon } from 'react-native-elements';
import _ from 'lodash';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import ProgressiveImage from 'react-native-progressive-image';

// import Spinner from '../../components/Spinner';
import { fetchGift, addQuantity, fetchCart } from '../../actions';

import * as config from '../../config/config';
// import progress from '../../../assets/images/progress.jpg';

import CardGift from './CardGift';

class GiftSelection extends PureComponent {
  static navigationOptions = () => ({
    title: 'Local Products Selection',
    headerTintColor: config.COLOR.primary,
    headerTitleStyle: config.headerTitleStyle,
    headerStyle: config.headerStyle,
    headerRight: <TouchableOpacity
		style={{ flexDirection: 'row', paddingRight: 15 }}
		onPress={
      async () => { await WebBrowser.openBrowserAsync('https://m.me/airlala.official'); }}
    >
			<Icon
				size={15}
				name="chat"
				color={config.COLOR.secondary}
			/>
			<Text style={{ marginLeft: 5, color: '#555' }}>Chat</Text>
		</TouchableOpacity>
  })

constructor(props) {
  super(props);
  this.state = {
    entries: this.props.items,
    activeSlide: 0,
  };
}
async componentWillMount() {
  const { setParams } = this.props.navigation;
  setParams({ sumCart: this.props.sumCart });
}
componentWillUpdate(nextProps) {
  // const { setParams } = nextProps.navigation;
  // setParams({ sumCart: this.props.sumCart });
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
  <CardGift
    onPress={() => {
      this.props.navigation.navigateWithDebounce('detailgift', { avaTitle: this.props.navigation.state.params.avaTitle, user: this.props.navigation.state.params.user, sumCart: this.props.sumCart });
      this.props.fetchGift(item.uid);
    }}
    onAddCart={async () => {
      await this.props.fetchGift(item.uid);
      await this.props.addQuantity(this.props.cardActive, item.uid);
      await this.props.navigation.navigateWithDebounce(
        'checkout',
        { avaTitle: this.props.navigation.state.params.avaTitle,
        user: this.props.navigation.state.params.user,
        sumCart: this.props.sumCart });
    }}

    item={item}
  />
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
  const itemsCart = _.filter(_.map(state.listRequest.cart[cardActive].items, (val, uid) => ({ ...val, uid })), (gift) => gift.quantity > 0);
  const sumCart = _.sumBy(itemsCart, (o) => o.quantity);
  return { items, cardActive, auth, sumCart };
};

export default connect(mapStateToProps, { fetchGift, addQuantity, fetchCart })(GiftSelection);
