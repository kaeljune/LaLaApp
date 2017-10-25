import React, { PureComponent } from 'react';
import {
  View,
  Alert,
  Animated,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { cardRemove } from '../../actions';
import { COLOR, WIDTH_SCREEN, HEIGHT_SCREEN, STYLES } from '../../config/config';

import Touch from '../../components/Touch';

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.rotate = new Animated.Value(0);
    this.scaleValue = new Animated.Value(1);
    this.translateY = new Animated.Value(200);
    this.opacity = new Animated.Value(0);
  }

  componentDidMount() {
    const { index } = this.props;
    const time = index * 500;
    Animated.sequence([
      Animated.delay(time),
      Animated.parallel([
        Animated.timing(this.opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: Platform.OS === 'android'
        }),
        Animated.spring(this.translateY, {
          toValue: 0,
          tension: 1,
          useNativeDriver: Platform.OS === 'android'
        }),
      ])
    ]).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isDel) {
      return Animated.sequence([
        Animated.timing(this.scaleValue, {
          toValue: (WIDTH_SCREEN / HEIGHT_SCREEN) * 1.65,
          duration: 500,
          useNativeDriver: Platform.OS === 'android'
        }),
        Animated.loop(
          Animated.sequence([
            Animated.delay(0),
            Animated.timing(this.rotate, {
              toValue: 1,
              duration: 150,
              useNativeDriver: Platform.OS === 'android'
            }),
            Animated.timing(this.rotate, {
              toValue: -1,
              duration: 300,
              useNativeDriver: Platform.OS === 'android'
            }),
            Animated.timing(this.rotate, {
              toValue: 0,
              duration: 150,
              useNativeDriver: Platform.OS === 'android'
            })
          ])
        )
      ]).start();
    }

    return Animated.parallel([
      Animated.timing(this.scaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: Platform.OS === 'android'
      }),
      Animated.timing(this.rotate, {
        toValue: 0,
        duration: 500,
        useNativeDriver: Platform.OS === 'android'
      })
    ]).start();
  }


  onXButtonPress = async () => {
    const { uid } = this.props;

    Alert.alert(
      'Remove Card Item',
      'Do you want to remove this Item?',
      [
        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
        { text: 'Remove', onPress: () => this.props.cardRemove(uid) },
      ],
      { cancelable: false }
    );
  }

  render() {
    const { shortName, name, occasion, priceRange, status, onPress, onLongPress, isDel } = this.props;

    const rotate = this.rotate.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: ['-1deg', '0deg', '1deg']
    });

    return (
      <Animated.View
        style={[
          styles.item,
          {
            transform: [{ translateY: this.translateY }],
            opacity: this.opacity
          }
        ]}
      >
        <Touch onPress={onPress} onLongPress={onLongPress}>
          <Animated.View
            style={[
              STYLES.boxShadow,
              styles.innerItem,
              {
                transform: [{ scale: this.scaleValue }, { rotate }]
              }
            ]}
          >
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
          </Animated.View>
        </Touch>
        {
          isDel && <View style={[styles.delBtn, STYLES.boxShadow]}>
            <Touch onPress={this.onXButtonPress}>
              <View style={styles.inner}>
                <Icon name="clear" color="#fff" />
              </View>
            </Touch>
          </View>
        }
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // padding: 10,
    width: (WIDTH_SCREEN / 2) - 8,
  },
  innerItem: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    margin: 8
  },
  status: {
    backgroundColor: COLOR.secondary,
    marginTop: 7,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 2
  },
  delBtn: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  inner: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    backgroundColor: COLOR.secondary,
    borderRadius: 3
  }
});

export default connect(null, { cardRemove })(Card);
