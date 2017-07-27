import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLOR } from '../../config/config';

class PaginationIndicator extends Component {
    constructor(props) {
        super(props);
    }

    renderItem = (index, selected) => {
        const style = [styles.base];
   
        if (selected)  
            {style.push(styles.selected);}
            
            return (
                <Text 
                    key={index} 
                    style={style}
                >
                    {index + 1}
                </Text>
            );
    }
    renderIndicators = () => {
        const length = this.props.length;
        const current = this.props.current;

        const indicators = [];
        for (let i = 0; i < length; i++) {
        indicators.push(this.renderItem(i, i === current));
        }

        return indicators;
    }

  render() {
    return (
      <View style={styles.container}>
        {this.renderIndicators()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
    },
    base: {
        paddingTop: 5,
        width: 30, 
        height: 30,
        textAlign: 'center',
        borderRadius: 20    
    },
    number: {
        textAlign: 'center',
        fontWeight: '500'
    },
    selected: {
        color: '#fff',
        backgroundColor: COLOR.secondary
    },
    colorSelected: {
        color: '#fff'
    }
});

export default PaginationIndicator;
