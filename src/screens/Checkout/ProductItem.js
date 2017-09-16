import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import _ from 'lodash';

import { WIDTH_SCREEN, COLOR, STYLES } from '../../config/config';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			right: new Animated.Value(0),
			total: _.parseInt(this.props.total)
		});
	}

	upQuality = () => {
		this.setState(previousState => ({ total: previousState.total + 1 }));
	}
	downQuality = () => {
		this.setState(previousState => ({ total: previousState.total - 1 }));
	}

	renderBtn = () => {
		if (this.state.total > 0) {
			return (
				<TouchableOpacity onPress={this.downQuality} style={styles.quantityAction}>
					<Icon 
						size={15}
						color="#888"
						name="remove"
					/>
				</TouchableOpacity>);
		}
		return (
			<View style={styles.quantityActionDisable}>
			<Icon name="remove" color="#999" size={15} />
			</View>
		);
	}

	render() {
		const { name, price, image } = this.props;
		console.log(this.props)
		return (
			<View style={styles.itemStyle}>
				<View style={{ width: 90, height: 90, backgroundColor: '#eee' }}>
					<Image
						source={{ uri: image }}
						style={{ width: 90, height: 90 }}
					/>
				</View>

				<View style={{ marginHorizontal: 15, flex: 1, justifyContent: 'space-around' }}>
					<View>
						<Text style={{ fontWeight: '600' }}>
							{name}
						</Text>

						<Text style={{ marginVertical: 5, color: '#888', fontSize: 12 }}>
							by <Text style={{ fontWeight: '500' }}>Maria</Text>
						</Text>
					</View>

					<Text style={{ color: COLOR.secondary, fontWeight: '600' }}>{price}</Text>
				</View>

				<View style={styles.quantityStyle}>
					<TouchableOpacity style={styles.quantityAction} onPress={this.upQuality}>
						<Icon
							color="#888"
							size={16}
							name="add"
						/>
					</TouchableOpacity>

					<View>
						<Text
							style={{
								fontWeight: '600',
								color: COLOR.primary,
								fontSize: 16,
							}}
						>{this.state.total}</Text>
					</View>

					{this.renderBtn()}
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	itemStyle: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderBottomColor: '#eee',
		borderBottomWidth: 1
	},
	quantityStyle: {
		height: 90,
		width: 40,
		borderLeftColor: '#eee',
		borderLeftWidth: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	quantityAction: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		height: 30,
		width: 40,
		//borderColor: '#999',
		//borderWidth: 1
	},
	quantityActionDisable: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		height: 30,
		width: 40,
		//borderColor: '#eee',
		//borderWidth: 1
	}
});

export default ProductList;

