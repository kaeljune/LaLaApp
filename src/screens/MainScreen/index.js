import React, { Component } from 'react';
import { FlatList, ScrollView, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Icon } from 'react-native-elements';
import { COLOR, WIDTH_SCREEN } from '../../config/config';

class MainScreen extends Component {
	static navigationOptions = () => ({
		title: 'Gifts',
		headerStyle: {
			paddingHorizontal: 10
		},
		headerTitleStyle: {
			alignSelf: 'center'
		},

		headerLeft: <View>
			<View style={{ flexDirection: 'row' }}>
				<Text
					style={styles.box}
				>
					01
                </Text>
				<Text>total</Text>
			</View>
		</View>,
		headerRight: <Avatar
			width={37}
			height={37}
			overlayContainerStyle={{ backgroundColor: COLOR.primary }}
			rounded
			title="HN"
		/>
	})

	state = {
		items: [
			{
				name: 'Hai Nguyen',
				purpose: 'Birthday',
				price: '$500',
				status: 'Gift ready'
			},
			{
				name: 'Hai Nguyen',
				purpose: 'Birthday',
				price: '$500',
				status: 'Gift ready'
			},
			{
				name: 'Hai Nguyen',
				purpose: 'Birthday',
				price: '$500',
				status: 'Gift ready'
			},
			{
				name: 'Hai Nguyen',
				purpose: 'Birthday',
				price: '$500',
				status: 'Gift ready'
			},

			{
				name: 'Hai Nguyen',
				purpose: 'Birthday',
				price: '$500',
				status: 'Gift ready'
			},
		]
	}

	renderItem = ({item}) => {
		return (
			<View 
				style={{
					padding: 10,
					backgroundColor: '#fff',
					borderRadius: 3,
					borderColor: '#eee',
					borderWidth: 1,
					marginHorizontal: 8,
					width: (WIDTH_SCREEN / 2) - 24,
				}}
			>
				<View style={{ paddingHorizontal: 5, paddingVertical: 10, alignItems: 'center' }}>
					<Avatar
						icon={{ name: 'person' }}
						overlayContainerStyle={{ backgroundColor: COLOR.primary }}
						rounded
						height={50}
						width={50}
					/>
					<Text style={{ fontSize: 18, marginTop: 7 }}>{item.name}</Text>
					<Text style={{ fontSize: 14, marginVertical: 7, color: '#d3d5d8' }}>for {item.purpose}</Text>
					<Text style={{ fontSize: 14, fontWeight: '600' }}>{item.price}</Text>
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
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Icon
						reverse
						raised
						reverseColor={COLOR.primary}
						name="chevron-right"
						size={16}
						color="#fff"
					/>
				</View>
			</View>			
		)
	}

	renderList = () => {
		const { items } = this.state;
		if (items.length > 0) {
			return (
				<View style={{ flex: 1, paddingBottom: 60 }}>
            <FlatList
								numColumns={2}
								contentContainerStyle={{ paddingVertical: 15 }}
								columnWrapperStyle={{ paddingVertical: 8, paddingHorizontal: 8 }}
                data={items}
                keyExtractor={(item) => items.indexOf(item)}
                renderItem={this.renderItem}
            />

					<View style={styles.bottomView}>
						<Icon
							size={25}
							reverse
							raised
							reverseColor="white"
							name="add"
							color={COLOR.primary}
							onPress={() => console.log('Add me')}
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
				/>

				<Text style={{ marginTop: 10, fontWeight: 'bold' }}>FIND A GIFT</Text>
			</View>
		);
	};

	render() {
		if (this.props.libraries.auth.user) {
			console.log(this.props.libraries.auth.user);
		}
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
	box: {
		backgroundColor: COLOR.secondary,
		paddingHorizontal: 5,
		paddingVertical: 1,
		borderRadius: 20,
		minWidth: 20,
		textAlign: 'center',
		color: '#fff',
		marginRight: 5
	},
	bottomView: {
		position: 'absolute',
		bottom: 0,
		width: WIDTH_SCREEN,
		alignItems: 'center',
		borderTopColor: '#eee',
		borderTopWidth: 1,
		backgroundColor: '#fff',
	}
});

const mapStateToProps = auth => ({ libraries: auth });

export default connect(mapStateToProps)(MainScreen);
