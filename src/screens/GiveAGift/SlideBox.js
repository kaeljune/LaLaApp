import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import BoxSelect from './BoxSelect';

class SlideBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    };
  }

  onActive = (item) => {
    this.setState({ selectedId: item }, this.props.onPress(item));
  }

  renderBox = ({ item }) => (
    <BoxSelect
      onActive={() => this.onActive(item.text)}
      id={item.text}
      isActive={item.text === this.state.selectedId}
      color={item.color}
    >
      {item.text}
    </BoxSelect>
  )

  render() {
    const { occasion } = this.props;
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={occasion}
          renderItem={this.renderBox}
          keyExtractor={item => item.id}
          extraData={this.state}
          removeClippedSubviews={false}
        />

      </View>

    );
  }
}

export default SlideBox;
