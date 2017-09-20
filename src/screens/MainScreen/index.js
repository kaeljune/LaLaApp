import React, { PureComponent } from 'react';
import { FlatList,
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';

import { accountFetch, fetchRequest, fetchListGift } from '../../actions';
import { COLOR, WIDTH_SCREEN, STYLES, headerStyle, headerTitleStyle } from '../../config/config';

class MainScreen extends PureComponent {
	static navigationOptions = ({ navigation }) => {
		const { state } = navigation;
		if (state.params !== undefined) {
			return {
				title: 'Gifts',
				headerStyle,
				headerTitleStyle,
				headerLeft: <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
					<View style={styles.box}>
						<Text style={{ color: '#fff' }}>
							{state.params ? state.params.items : '0'}
						</Text>
					</View>
					<Text>total</Text>
				</View>,
				headerRight: <View style={{ marginRight: 10 }}>
					<TouchableOpacity onPress={() => navigation.navigate('isProfile')}>
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

	async componentWillMount() {
		await this.props.fetchRequest();
		const { setParams } = this.props.navigation;
		const { auth, items } = this.props;
		const name = auth.userLogin.name;
		setParams({ name: _.toUpper(name.match(/\b\w/g).join('')), items: items.length });
	}

	componentDidMount() {
		//console.log(this.props.state);
		firebase.auth().currentUser.getIdToken(true)
			.then((idToken) => {
				console.log(idToken);
				// Send token to your backend via HTTPS
				// ...
			}).catch((error) => {
				// Handle error
				console.log(error);
			});
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.items !== nextProps.items) {
			return true;
		}
		return false;
	}

	renderItem = ({ item }) => {
		const name = item.receiverName ? item.receiverName : 'Anonymous';
		const shortName = _.toUpper(name.match(/\b\w/g).join(''));

		return (
				<View style={[styles.item, STYLES.boxShadow]}>
					<TouchableOpacity
						onPress={() => {
							requestAnimationFrame(() => {
								this.props.navigation.navigate('giftselection');
								this.props.fetchListGift(item.uid);
							});
						}}
					>
					<View style={{ paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center' }}>
						<Avatar
							height={50}
							width={50}
							overlayContainerStyle={{ backgroundColor: COLOR.primary }}
							rounded
							title={shortName}
						/>
						<Text style={{ fontSize: 18, marginTop: 7 }}>{name}</Text>
						<Text style={{ fontSize: 14, marginVertical: 7, color: '#888' }}>
							for {item.occasion}
						</Text>
						<Text style={{ fontSize: 14, fontWeight: '600' }}>{item.priceRange}</Text>
						<Text
							style={{
								backgroundColor: COLOR.secondary,
								fontSize: 12,
								color: '#fff',
								marginTop: 7,
								paddingVertical: 3,
								paddingHorizontal: 7,
								borderRadius: 2
							}}
						>{item.status}</Text>
					</View>
					</TouchableOpacity>
				</View>

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

					<View style={styles.bottomView}>
						<Icon
							size={25}
							reverse
							raised
							reverseColor="white"
							name="add"
							color={COLOR.primary}
							onPress={() => this.props.navigation.navigate('address')}
						/>

					</View>
				</View>
			);
		}

		return (
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
					onPress={() => this.props.navigation.navigate('address')}
				/>

				<Text style={{ marginTop: 10, fontWeight: '700' }}>FIND A GIFT</Text>
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
	item: {
		padding: 10,
		backgroundColor: '#fff',
		margin: 8,
		width: (WIDTH_SCREEN / 2) - 24,
	},
	box: {
		backgroundColor: COLOR.secondary,
		paddingHorizontal: 5,
		paddingVertical: 1,
		height: 25,
		width: 25,
		borderRadius: 20,
		minWidth: 20,
		marginRight: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottomView: {
		position: 'absolute',
		bottom: 0,
		width: WIDTH_SCREEN,
		alignItems: 'center',
	}
});

const mapStateToProps = state => {
	const items = _.map(state.listRequest.results, (val, uid) => ({ ...val, uid }));
	//const gifts = _.map(state.listRequest.listGift, (val, uid) => ({ ...val, uid }));
	const auth = state.fetchAcc;
	return { items, auth };
};

export default connect(mapStateToProps, { accountFetch, fetchRequest, fetchListGift })(MainScreen);
