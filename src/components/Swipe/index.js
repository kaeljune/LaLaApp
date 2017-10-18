import React from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  PanResponder,
  View,
  Dimensions
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationX: new Animated.Value(0),
      left: 0,
      opacity: false
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => this.handleMoveShouldSetPanResponder(event, gestureState),
      onPanResponderGrant: (event, gestureState) => this.handlePanResponderGrant(event, gestureState),
      onPanResponderMove: (event, gestureState) => this.handlePanResponderMove(event, gestureState),
      onPanResponderRelease: (event, gestureState) => this.handlePanResponderRelease(event, gestureState),
    });
	}

	onUndo = () => {
    Animated.spring(this.state.locationX, {
      toValue: 0
    }).start(() => this.setState({ opacity: false }));
  }

  handleMoveShouldSetPanResponder = (event, gestureState) => {
    const { dx, dy } = gestureState;
    if (Math.abs(dy) > Math.abs(dx)) {
      return false;
    }
    return true;
  }

  handlePanResponderGrant = (event, gestureState) => {
    this.props.handleSwipe(false);
    return true;
  }

  handlePanResponderMove = (event, gestureState) => {
    const { dx } = gestureState;
    const left = dx >= 0 ? 0 : this.props.width - 100;

    this.props.handleSwipe(false);

    this.setState({
      locationX: new Animated.Value(dx),
      left
    });

  }

  handlePanResponderRelease = (event, gestureState) => {
    const { dx } = gestureState;

    const opacity = Math.abs(dx) >= this.props.width;
    this.setState({ opacity });

    this.props.handleSwipe(true);

    if (Math.abs(dx) > 100) {
      if (dx > 0) {
        Animated.spring(this.state.locationX, {
          toValue: this.props.width
        }).start();
      } else {
        Animated.spring(this.state.locationX, {
          toValue: -this.props.width
        }).start();
      }

      this.setState({ opacity: true });
    } else {
      Animated.spring(this.state.locationX, {
        toValue: 0
      }).start(() => this.setState({ opacity: false }));
    }
  }

  render() {
		const { left, opacity } = this.state;
		const { backgroundColor, height, style } = this.props;

    return (

      <View
        style={[
					{
						height,
						backgroundColor,
						justifyContent: 'center',
					},
					style
				]}
      >
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
						alignItems: 'center',
            width: height,
            top: 0,
            left,
            bottom: 0,
						opacity: opacity ? 0 : 1,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>Remove</Text>
        </View>
        <View
					style={{
						height,
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: 20,
						justifyContent: 'space-between',
						opacity: opacity ? 1 : 0,
					}}
        >
          <Text onPress={() => this.props.removeItem()} style={{ color: '#fff', fontWeight: '600' }}>Remove Item</Text>
          <Text onPress={this.onUndo} style={{ color: '#fff', fontWeight: '600' }}>Undo</Text>
        </View>
        <Animated.View
          style={[
            styles.swipe,
            {
              transform: [{
                translateX: this.state.locationX
              }],
            }
          ]}
          {...this.panResponder.panHandlers}
        >
          {this.props.children}
        </Animated.View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200
  },
  swipe: {
    position: 'absolute',
    justifyContent: 'center',
    // width: WIDTH,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'blue'
  }
});
