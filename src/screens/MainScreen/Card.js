import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

import { COLOR, WIDTH_SCREEN, STYLES } from '../../config/config';

import Touch from '../../components/Touch';

class Card extends PureComponent {
  render() {
    const { shortName, name, occasion, priceRange, status, onPress, onLongPress, isDel } = this.props;

    return (
      <View
        style={[
          styles.item,
          STYLES.boxShadow,
        ]}
      >
      <Touch onPress={onPress} onLongPress={onLongPress}>
        <View style={{ paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center', opacity: isDel ? '0.6' : 1 }}>
          <Avatar
            height={50}
            width={50}
            overlayContainerStyle={{ backgroundColor: COLOR.primary }}
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
        </Touch>
        {
          isDel && <View style={[styles.delBtn, STYLES.boxShadow]}>
            <Icon name="clear" color="#fff" />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 8,
    width: (WIDTH_SCREEN / 2) - 24,
  },
  status: {
    backgroundColor: COLOR.secondary,
    marginTop: 7,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 2
  },
  delBtn: {
    justifyContent: 'center',
    backgroundColor: COLOR.secondary,
    height: 30,
    width: 30,
    position: 'absolute',
    top: 0,
    right: 0
  }
});

export default Card;
