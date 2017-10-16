import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

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
    const { items, label } = this.props;
    return (
      <View style={styles.sectionItem}>
        { label && <Text style={{ fontWeight: '700', marginTop: 15 }}>{label}</Text>}
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
    paddingVertical: 5
  }
});

export default SlideSelect;
