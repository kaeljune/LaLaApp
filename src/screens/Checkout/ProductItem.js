import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
// import Spinner from '../../components/Spinner';
import _ from 'lodash';
import { addQuantity, subQuantity } from '../../actions';

import { COLOR } from '../../config/config';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			total: _.parseInt(this.props.total)
		});
	}

	upQuality = () => {
		this.setState(previousState => ({ total: previousState.total + 1 }));
		this.props.addQuantity(this.props.cardActive, this.props.uid);
	}
	downQuality = () => {
		this.setState(previousState => ({ total: previousState.total - 1 }));
		this.props.subQuantity(this.props.cardActive, this.props.uid);
	}

	renderBtn = () => {
		if (this.state.total > 0) {
			return (
				<TouchableOpacity onPress={this.downQuality} style={styles.quantityAction}>
					<Icon
						size={15}
						color="#888"
						name="remove"
						containerStyle={{ backgroundColor: '#fff', height: 40, width: 40 }}
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
		const { artisan, name, price, image, uid } = this.props;

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
							by <Text style={{ fontWeight: '500' }}>{artisan || 'Airlala'}</Text>
						</Text>
					</View>

					<Text style={{ color: COLOR.secondary, fontWeight: '600' }}>${price}</Text>
				</View>

				<View style={styles.quantityStyle}>
					<TouchableOpacity style={styles.quantityAction} onPress={this.upQuality}>
						<Icon
							color="#888"
							size={16}
							containerStyle={{ backgroundColor: '#fff', height: 40, width: 40 }}
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

export default connect(null, { addQuantity, subQuantity })(ProductList);

