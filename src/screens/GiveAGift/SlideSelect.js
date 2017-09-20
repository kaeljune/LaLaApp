import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
=======
import { View, StyleSheet, FlatList } from 'react-native';
>>>>>>> 043710a84f99f0935cf682515327a77a12da56d1

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
<<<<<<< HEAD

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
        />

=======

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

>>>>>>> 043710a84f99f0935cf682515327a77a12da56d1
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
