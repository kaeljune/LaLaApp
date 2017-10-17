import React, { Component } from 'react';
import {
	FlatList,
	View,
	Text,
	LayoutAnimation,
	UIManager,
	Platform,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';

import Card from './Card';

import { accountFetch, fetchRequest, fetchListGift, fetchCart } from '../../actions';
import { COLOR, WIDTH_SCREEN, 
	headerStyle, headerTitleStyle, bodau, CustomLayoutSpring } from '../../config/config';

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

		if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
	}

	async componentWillMount() {
		await this.props.fetchRequest();

		const { setParams } = this.props.navigation;
		const { auth, items } = this.props;
		const name = bodau(auth.userLogin.name);

		setParams({
			name: _.toUpper(name.match(/\b\w/g)
							.join(''))
							.substring(0, 2),
			items: items.length
		});
	}
	// componentWillReceiveProps(nextProps) {
  //   // nextProps are the next set of props that this component
  //   // will be rendered with
  //   // this.props is still the old set of props
	// 	console.log('hello');
  //   //this.createDataSource(nextProps);
  // }

	onPress = async (shortName, item) => {
		if (this.state.isDel) return;

		await this.props.fetchListGift(item.uid);
			this.props.fetchCart(item);
			this.props.navigation.navigateWithDebounce('giftselection', 
				{ avaTitle: shortName, user: item });
	}

	onLongPress = () => {
		LayoutAnimation.configureNext(CustomLayoutSpring);
		this.setState({ isDel: true });
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
				isDel={this.state.isDel}
				status={item.status}
				index={index}
				onLongPress={this.onLongPress}
				onPress={() => this.onPress(shortName, item)}
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
			<View style={styles.container}>

				<View
					style={{
						flex: 1,
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TouchableOpacity onPress={() => this.props.navigation.navigateWithDebounce('address')}>
						<View
							style={{
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
				</View>

				<View
					style={{
						flex: 1,
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<TouchableOpacity onPress={() => this.props.navigation.navigateWithDebounce('address')}>
						<View
							style={{
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

							<Text style={{ marginTop: 10, fontWeight: '700' }}>FOR OTHER PEOPLE</Text>
						</View>
					</TouchableOpacity>
				</View>

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
