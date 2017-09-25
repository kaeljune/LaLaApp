import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

import * as config from '../../config/config';

class Card extends PureComponent {

  render() {
    const { shortName, name, occasion, priceRange, status, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.item,
            config.STYLES.boxShadow,
          ]}
        >
          <View style={{ paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center' }}>
            <Avatar
              height={50}
              width={50}
              overlayContainerStyle={{ backgroundColor: config.COLOR.primary }}
              rounded
              title={shortName}
            />
            <Text style={{ fontSize: 18, marginTop: 7 }}>{name}</Text>
            <Text style={{ fontSize: 14, marginVertical: 7, color: '#888' }}>
              for {occasion}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '600' }}>{`~${priceRange}$`}</Text>
            <View style={styles.status}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#fff',
                }}
              >{status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 8,
    width: (config.WIDTH_SCREEN / 2) - 24,
  },
  status: {
    backgroundColor: config.COLOR.secondary,
    marginTop: 7,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 2
  }
});

export default Card;