import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';

import BoxSelect from './BoxSelect';

class SlideBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: undefined
        };
    }

    onActive = (id) => {
        this.setState({ selectedId: id });
        this.props.onPress(id);
    }
    
    render() {
        const { occasion } = this.props;
        return (
            <View>
                <ScrollView
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                >
                    {occasion.map((item, i) => 
                        <BoxSelect 
                            onActive={this.onActive} 
                            id={item.text} key={i} 
                            isActive={item.text === this.state.selectedId}
                            color={item.color}
                        >
                            {item.text}
                        </BoxSelect>
                    )}
                </ScrollView>
            </View>
           
        );
    }
}

export default SlideBox;
