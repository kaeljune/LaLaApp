import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  Platform,
  TouchableOpacity
} from 'react-native';

import { Avatar, Icon } from 'react-native-elements';

import * as config from '../../config/config';

class Card extends PureComponent {
  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(config.CustomLayoutSpring)
  }

  render() {
    const { shortName, name, occasion, priceRange, status, onPress, onLongPress, isDel } = this.props;

    return (
      <View
        style={[
          styles.item,
          config.STYLES.boxShadow
        ]}
      >
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <View style={{ paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center', opacity: isDel ? '0.6' : 1 }}>
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
        </TouchableOpacity>
        {
          isDel && <View style={[{ justifyContent: 'center', backgroundColor: config.COLOR.secondary, height: 35, width: 35, position: 'absolute', top: 0, right: 0 }, config.STYLES.boxShadow ]}>
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