import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import ButtonSeclect from './ButtonSelect';

class SlideSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: null
        };
    }
    onActive = (i) => {
        this.setState({ selectedId: i });
        this.props.onPress(i);   
    }

    render() {
        const { items } = this.props;
        return (
            <View style={styles.sectionItem}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {items.map((item, i) => 
                        <ButtonSeclect 
                            onActive={this.onActive} 
                            id={item} key={i}
                            isActive={item === this.state.selectedId}
                        >
                            {item}
                        </ButtonSeclect>
                    )}
                </ScrollView>
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
