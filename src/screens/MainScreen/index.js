import React, { Component } from 'react';
import {
	FlatList,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';

import Card from './Card';

import { accountFetch, fetchRequest, fetchListGift, fetchCart } from '../../actions';
import { COLOR, WIDTH_SCREEN, headerStyle, headerTitleStyle } from '../../config/config';

const bodau = (str) => {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
	str = str.replace(/đ/g, 'd');
	// str = str.replace(/\W+/g, ' ');
	// str = str.replace(/\s/g, '-');
	return str;
};

class MainScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { state } = navigation;
		if (state.params !== undefined) {
			return {
				title: 'Find Local Products',
				headerStyle,
				headerTitleStyle,
				headerLeft: null,
				headerBackTitle: null,
				// headerLeft: <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
				// 	<View style={styles.box}>
				// 		<Text style={{ color: '#fff' }}>
				// 			{state.params ? state.params.items : '0'}
				// 		</Text>
				// 	</View>
				// 	<Text>total</Text>
				// </View>,
				headerRight: <View style={{ marginRight: 10 }}>
					<TouchableOpacity onPress={() => navigation.navigateWithDebounce('isProfile')}>
						<Avatar
							width={37}
							height={37}
							overlayContainerStyle={{ backgroundColor: COLOR.primary }}
							rounded
							title={state.params ? state.params.name : '?'}
						/>
					</TouchableOpacity>
				</View>
			};
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			isDel: false
		};
	}

	async componentWillMount() {
		await this.props.fetchRequest();

		const { setParams } = this.props.navigation;
		const { auth, items } = this.props;
		const name = bodau(auth.userLogin.name);
		setParams({ name: _.toUpper(name.match(/\b\w/g).join('')).substring(0, 2), items: items.length });
	}

	renderItem = ({ item, index }) => {
		const name = item.receiverName ? item.receiverName : 'Anonymous';
		bodau(name);
		const shortName = _.toUpper(name.match(/\b\w/g).join('')).substring(0, 2);
		return (

				<Card
					shortName={shortName}
					name={name}
					occasion={item.occasion}
					priceRange={item.priceRange}
					status={item.status}
					index={index}
					onPress={async () => {
						await this.props.fetchListGift(item.uid);
						 this.props.fetchCart(item);
						 this.props.navigation.navigateWithDebounce('giftselection', { avaTitle: shortName, user: item });
					}}
				/>

		);
	}

	renderList = () => {
		const { items } = this.props;
		if (items.length > 0) {
			return (
				<View style={{ flex: 1 }}>
					<FlatList
						numColumns={2}
						contentContainerStyle={{ paddingVertical: 15 }}
						columnWrapperStyle={{ paddingHorizontal: 8 }}
						data={items}
						keyExtractor={(item) => items.indexOf(item)}
						renderItem={this.renderItem}
						removeClippedSubviews={false}
					/>

					<View
						style={{
							height: 40,
							backgroundColor: '#fff',
							borderTopColor: '#ddd',
							borderTopWidth: 1,
						}}
					/>

					<View style={styles.bottomView}>
						{
							this.state.isDel
								? <TouchableOpacity onPress={() => this.setState({ isDel: false })}>
									<Icon
										size={25}
										reverse
										raised
										reverseColor="white"
										name="check"
										color={COLOR.secondary}
									/>
								</TouchableOpacity>
								: <TouchableOpacity onPress={() => this.props.navigation.navigateWithDebounce('address')}>
									<Icon
										size={25}
										reverse
										raised
										reverseColor="white"
										name="add"
										color={COLOR.primary}

									/>
								</TouchableOpacity>
						}
					</View>
				</View>
			);
		}

		return (
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={() => this.props.navigation.navigateWithDebounce('address')}>
					<View
						style={{
							flex: 1,
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Icon
							reverse
							raised
							reverseColor="white"
							name='add'
							color={COLOR.primary}
						/>

						<Text style={{ marginTop: 10, fontWeight: '700' }}>FOR ME</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigateWithDebounce('address')}>
					<View
						style={{
							flex: 1,
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Icon
							reverse
							raised
							reverseColor="white"
							name='add'
							color={COLOR.primary}
						/>

						<Text style={{ marginTop: 10, fontWeight: '700' }}>FOR OTHER PEOPLE</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				{this.renderList()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.background,
	},
	bottomView: {
		position: 'absolute',
		bottom: 0,
		zIndex: 10,
		width: WIDTH_SCREEN,
		alignItems: 'center',
	}
});

const mapStateToProps = state => {
	const items = _.map(state.listRequest.results, (val, uid) => ({ ...val, uid }));
	const auth = state.fetchAcc;
	return { items, auth };
};

export default connect(mapStateToProps,
	{ accountFetch, fetchRequest, fetchListGift, fetchCart })(MainScreen);
