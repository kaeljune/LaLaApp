import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, Ac } from 'react-native';
import { Icon } from 'react-native-elements';

import * as config from '../../config/config';
import Spinner from '../../components/Spinner';

class CardGift extends PureComponent {
  state =  {
    loading: true
  }
  onLoad = () => {
    this.setState({ loading: false });
  }
  render() {
    const { item, onPress, onAddCart } = this.props;
    return (
      <View style={[styles.slide, styles.boxShadow]}>
        <TouchableOpacity
          onPress={onPress}
        >
          <View style={[styles.image, { backgroundColor: '#eee' }]}>
            { this.state.loading && <Spinner
              size="small"
              color={config.COLOR.primary}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
              }}
            /> }
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              onLoad={this.onLoad}
            />
          </View>
        </TouchableOpacity>

        <View style={{ padding: 20, flex: 1 }}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={{ color: '#777', fontSize: 17 }}>by {item.artisan || 'Airlala'}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ fontWeight: '700', fontSize: 20, marginLeft: 20 }}>{item.price}</Text>

          <TouchableOpacity onPress={onAddCart}>
            <View style={styles.cardBtn}>
              <Icon name="add" size={17} color="#fff" />
              <Text style={styles.titleCardBtn}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#fff',
    marginVertical: 25
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
    fontSize: 25,
    fontWeight: '100',
    color: '#313131',
    marginBottom: 20
  },
  cardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: config.COLOR.secondary,
    borderColor: config.COLOR.secondary,
    borderWidth: 1,
    padding: 15,
  },
  titleCardBtn: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 5
  }
});

export default CardGift;