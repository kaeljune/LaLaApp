import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated
} from 'react-native';
import { Icon } from 'react-native-elements';

import Btn from '../../components/Btn';

import * as config from '../../config/config';
import product from '../../../assets/images/product2.jpg';

class DetailGift extends Component {
  static navigationOptions = () => ({
    header: null
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
    const heightImg = (config.HEIGHT_SCREEN * 2) / 3;

    const translateY = this.state.yOffset.interpolate({
      inputRange: [0, (heightImg - config.HEIGHT_HEADER - 50)],
      outputRange: [0, -(heightImg - config.HEIGHT_HEADER)],
      extrapolate: 'clamp',
    });

    const opacity = this.state.yOffset.interpolate({
      inputRange: [0, (heightImg - config.HEIGHT_HEADER - 50)],
      outputRange: [1, 0.3],
      extrapolate: 'clamp',
    });
    const scale = this.state.scaleValue;

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            position: 'absolute',
            backgroundColor: '#212121',
            top: this.state.yTransform,
            left: 0,
            right: 0,
            transform: [{ translateY }]
          }}
        >
          <Animated.Image
            source={product}
            style={{ height: heightImg, width: config.WIDTH_SCREEN, transform: [{ scale }], opacity }}
          />
        </Animated.View>
       
        <Animated.ScrollView
          contentContainerStyle={{ paddingTop: heightImg }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.yOffset } } }],
          )}
        >
        
          <View style={{}}>
            <View style={[styles.section, { alignItems: 'center', borderBottomColor: '#ddd', borderBottomWidth: 1 }]}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 35,
                  fontWeight: '700',
                  marginVertical: 15,
                  color: '#333'
                }}
              >The Levante backpack</Text>
              <Text style={{ marginBottom: 20, fontSize: 16, fontWeight: '700', color: config.COLOR.secondary }}>$25.00</Text>

              <Btn
                title="Gift Now"
                style={{ width: 150 }}
                bgColor={config.COLOR.primary}
              />
            </View>
            <View style={styles.section}>
              <Text style={{ fontWeight: '400', color: '#000', marginBottom: 15, fontSize: 18 }}>Description</Text>

              <Text style={{ lineHeight: 30, fontSize: 15, fontWeight: '100', color: '#666' }}>
                Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.
            </Text>
            </View>
          </View>
        </Animated.ScrollView>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: config.HEIGHT_HEADER,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Icon
            color="#fff"
            name="keyboard-backspace"
            containerStyle={{ height: config.HEIGHT_HEADER, width: config.HEIGHT_HEADER }}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
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
  }
});

export default DetailGift;

