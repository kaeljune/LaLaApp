import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Radio from './Radio';

class ListRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    };
  }

  onActive = (id) => {
    this.setState({
      selectedId: id
    });
  }

  render() {
    return (
      <View>

        {this.props.data.map((item, i) => <Radio
          onActive={this.onActive} 
          text={item.location}
          id={i}
          containerStyle={{ borderBottomColor: '#ddd', borderBottomWidth: 1 }}
          isActive={i === this.state.selectedId}
          key={i}
        />)}

      </View>


    );
  }
}

export default ListRadio;
