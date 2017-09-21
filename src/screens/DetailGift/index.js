import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

import Btn from '../../components/Btn';

import * as config from '../../config/config';

class DetailGift extends Component {
  static navigationOptions = () => ({
    // header: null
    headerStyle: config.headerOverlay,
    headerTintColor: config.COLOR.primary,
    headerRight: (
      <TouchableWithoutFeedback>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
          <View style={{ padding: 5 }}>
            <Icon name="card-giftcard" size={25} color="#858585" />
            <View style={styles.card}>
              <Text style={{ color: '#fff', fontSize: 10 }}>01</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  })

  state = {
    yOffset: new Animated.Value(0),
    scaleValue: new Animated.Value(0.9),
    yTransform: new Animated.Value(100)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.scaleValue, {
        toValue: 1,
      }),
      Animated.timing(this.state.yTransform, {
        toValue: 0,
        duration: 300
      })

    ]).start();
  }

  render() {
    const heightImg = (config.HEIGHT_SCREEN * 0.6);

    const { item } = this.props;
    return (
      <View style={styles.container}>

        <Animated.ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: config.HEIGHT_HEADER }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.yOffset } } }],
          )}
        >

        <Image
          source={{ uri: item.image }}
          style={{ height: heightImg, width: config.WIDTH_SCREEN }}
        />
            <View style={[styles.section, { alignItems: 'center', borderBottomColor: '#ddd', borderBottomWidth: 1 }]}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  lineHeight: 40,
                  fontWeight: '400',
                  marginBottom: 15,
                  color: '#333'
                }}
              >{item.name}</Text>

              <Text style={{ marginBottom: 20, fontSize: 16, fontWeight: '700', color: '#777' }}>{item.price}</Text>

              <Btn
                title="Add to Cart"
                style={{ width: 150 }}
                bgColor={config.COLOR.secondary}
                onPress={() => this.props.navigation.navigate('checkout', { user: this.props.navigation.state.params.user })}
              />
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: '400', color: '#000', marginBottom: 15, fontSize: 18 }}>Description</Text>

              <Text style={{ lineHeight: 30, fontSize: 15, fontWeight: '100', color: '#666' }}>
                {item.description}
              </Text>
            </View>
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section: {
    marginVertical: 15,
    marginHorizontal: 15,
    paddingBottom: 30
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
  const GiftID = state.listRequest.giftActive;
  const item = _.find(_.map(state.listRequest.listGift, (val, uid) => ({ ...val, uid })), { uid: state.listRequest.giftActive });
  //const gifts = _.map(state.listRequest.listGift, (val, uid) => ({ ...val, uid }));
  return { item, GiftID };
};

export default connect(mapStateToProps, {})(DetailGift);

