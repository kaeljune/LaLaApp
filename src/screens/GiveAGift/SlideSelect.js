import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ButtonSeclect from './ButtonSelect';

class SlideSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    };
  }
  // onActive = async (i) => {
  //   await this.setState({ selectedId: i });
  //   await this.props.onPress(i);
  // }
  onActive = (item: string) => {
    this.setState({ selectedId: item }, this.props.onPress(item));
  }

  renderButton = ({ item }) => (
    <ButtonSeclect
      onActive={() => this.onActive(item)}
      isActive={item === this.state.selectedId}
    >
      {item}
    </ButtonSeclect>
  )

  render() {
    const { items } = this.props;
    return (
      <View style={styles.sectionItem}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={this.renderButton}
          keyExtractor={item => item}
          extraData={this.state}
          removeClippedSubviews={false}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15
  }
});

export default SlideSelect;
