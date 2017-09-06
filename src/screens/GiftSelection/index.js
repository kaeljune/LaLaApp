import React, { Component } from 'react';
import {
	View,
	Text,
    StyleSheet,
    FlatList,
    ScrollView,
    Image
} from 'react-native';

import { Icon } from 'react-native-elements';
import { COLOR, WIDTH_SCREEN } from '../../config/config';

import PaginationIndicator from './PaginationIndicator';
import Btn from '../../components/Btn';
import SectionMessage from '../../components/SectionMessage';
// import Slider from './Slider';

import product from '../../../assets/images/bag.png';

const items = [
    {
        name: 'Bag',
        price: '$500USD',
        images: product,
        detail: {

        }
    },
    {
        name: 'Bag',
        price: '$500USD',
        images: product,
        detail: {

        }
    },
    {
        name: 'Bag',
        price: '$500USD',
        images: product,
        detail: {

        }
    },
    {
        name: 'Bag',
        price: '$500USD',
        images: product,
        detail: {

        }
    },
    {
        name: 'Bag',
        price: '$500USD',
        images: product,
        detail: {

        }
    },
   
];

class GiftSelection extends Component {
    static navigationOptions = ({ navigation }) => ({
		title: 'Gift selection',
		headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
			<Icon
				size={15}
				name='create'
				color={COLOR.primary}
				onPress={() => navigation.goBack()}
			/>
			<Text style={{ marginLeft: 5 }}>Edit</Text>
		</View>
    })

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    onScrollEnd = (e) => {
        const contentOffset = e.nativeEvent.contentOffset;
        const viewSize = e.nativeEvent.layoutMeasurement;
        const pageNum = Math.floor(contentOffset.x / viewSize.width);

        this.setState({
            index: pageNum
        });
    }

    getItemLayout = (data, index) => (
        { length: WIDTH_SCREEN, offset: WIDTH_SCREEN * index, index }
    )

    changeIndex = (index) => {
        this.setState({ index });
    }

    scrollTo = (index) => {
        this.setState({ index });
        
        this.flatListRef.scrollToIndex({ animated: true, index });
    } 

    renderItem = ({ item }) => (
        <View 
            style={styles.section}
        >
            <ScrollView 
                pagingEnabled 
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
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
		return (
            <View style={styles.container}>
              
                <View style={{ flex: 1, width: WIDTH_SCREEN }}>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    ref={(ref) => { this.flatListRef = ref; }}
                    getItemLayout={this.getItemLayout}
                    onMomentumScrollEnd={this.onScrollEnd}
                    horizontal
                    pagingEnabled
                    data={items}
                    keyExtractor={(item) => items.indexOf(item)}
                    renderItem={this.renderItem}
                    onChanged={this.handleOnChange}
                />
                </View>
               
                <View style={styles.bottom}>
                    <View style={styles.pageWrap}>
                        <PaginationIndicator 
                            length={items.length} 
                            current={this.state.index} 
                            scrollTo={this.scrollTo}
                        />
                    </View>
                    <View style={styles.more}>
                        <Icon 
                            size={20}
                            name="assignment"
                            color={COLOR.primary}
                          
                        />
                    </View>
                </View>
            </View>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    },
    section: {
        flex: 1,
        alignItems: 'center',
        width: WIDTH_SCREEN,
        paddingBottom: 50,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        backgroundColor: '#fff',
        height: 50,
        width: WIDTH_SCREEN
    },
    pageWrap: {
        justifyContent: 'center',
        width: WIDTH_SCREEN - 50
    },
    more: {
        width: 50, 
        height: 50, 
        justifyContent: 'center',
        backgroundColor: '#fff', 
        borderLeftWidth: 1, 
        borderLeftColor: '#ddd'
    }
});

export default GiftSelection;
