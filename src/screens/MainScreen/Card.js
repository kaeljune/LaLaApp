import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

import * as config from '../../config/config';

class Card extends PureComponent {
  render() {
    const { props } = this.props;
    return (

      <View style={[styles.item, config.STYLES.boxShadow]}>
        <TouchableOpacity
          onPress={() => {
            requestAnimationFrame(() => {
              props.navigation.navigate('giftselection');
              props.fetchListGift(props.item.uid);
            })
          }}
        >
          <View style={{ paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center' }}>
            <Avatar
              height={50}
              width={50}
              overlayContainerStyle={{ backgroundColor: config.COLOR.primary }}
              rounded
              title={props.shortName}
            />
            <Text style={{ fontSize: 18, marginTop: 7 }}>{props.name}</Text>
            <Text style={{ fontSize: 14, marginVertical: 7, color: '#888' }}>
              for {props.item.occasion}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '600' }}>{props.item.priceRange}</Text>
            <Text
              style={{
                backgroundColor: config.COLOR.secondary,
                fontSize: 12,
                color: '#fff',
                marginTop: 7,
                paddingVertical: 3,
                paddingHorizontal: 7,
                borderRadius: 2
              }}
            >{props.item.status}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 8,
    width: (config.WIDTH_SCREEN / 2) - 24,
  }
});

export default Card;