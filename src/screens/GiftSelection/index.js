import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
    Image,
	StyleSheet
} from 'react-native';

import { Icon } from 'react-native-elements';
import { COLOR, WIDTH_SCREEN } from '../../config/config';

import PaginationIndicator from './PaginationIndicator';
import Slider from './Slider';

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
    }
];

class GiftSelection extends Component {
    static navigationOptions = ({ navigation }) => ({
		title: 'Gift selection',
		headerStyle: {
			paddingLeft: 5
		},
		headerTitleStyle: {
			alignSelf: 'center'
		},
		headerLeft: <Icon
			name='chevron-left'
			color={COLOR.primary}
			onPress={() => navigation.goBack()}
		/>,
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

    changeIndex = (index) => {
        this.setState({ index });
    }

	render() {
		return (
            <View style={styles.container}>
                <Slider 
                    items={items} 
                    onChanged={(index) => this.changeIndex(index)} 
                    index={this.state.index}
                />
               
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
                            onPress={() => alert(12)} 
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
