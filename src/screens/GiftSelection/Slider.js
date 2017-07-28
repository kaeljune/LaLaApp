import React, { Component } from 'react';
import { 
    FlatList, 
    View, 
    ScrollView, 
    Text, 
    Image, 
    StyleSheet
} from 'react-native';

import Btn from '../../components/Btn';
import SectionMessage from '../../components/SectionMessage';
import { COLOR, WIDTH_SCREEN } from '../../config/config';


class Slider extends Component {
    constructor(props) {
        super(props);
    }

    onScrollEnd = (e) => {
        const contentOffset = e.nativeEvent.contentOffset;
        const viewSize = e.nativeEvent.layoutMeasurement;
        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        if (this.props.onChanged) {
            this.props.onChanged(pageNum);
        }
    }

    onLayout = (index) => {
        this.flatListRef.scrollToIndex({ animated: true, index  });
    }

    renderItem = ({ item }) => (
            <View 
                style={styles.section}
            >
                <ScrollView pagingEnabled contentContainerStyle={{ paddingHorizontal: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image 
                            style={{ width: 150, height: 200 }}
                            source={item.images}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>
                            Leather Bag
                        </Text>
                        <Text style={{ marginVertical: 20 }}>120USD</Text>
                        <Btn
                            title="GIFT THIS"
                            bgColor={COLOR.primary}
                            onPress={() => { console.log('Gift this'); }}
                        />
                    </View>
                    
                    <SectionMessage />
                </ScrollView>
            </View>
        )

    render() {
        const { items } = this.props;
        
        return (
            <View onChanged={() => this.onLayout(this.props.index)} style={{ flex: 1, width: WIDTH_SCREEN }}>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    ref={(ref) => { this.flatListRef = ref; }}
                    horizontal
                    pagingEnabled
                    data={items}
                    keyExtractor={(item) => items.indexOf(item)}
                    renderItem={this.renderItem}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        alignItems: 'center',
        width: WIDTH_SCREEN,
        paddingBottom: 50,
    },
});

export default Slider;
