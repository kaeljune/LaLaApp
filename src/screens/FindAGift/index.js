import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import Btn from '../../components/Btn';

import avatar from '../../../assets/images/avatar.png';
import { WIDTH_SCREEN, COLOR, headerStyle, headerTitleStyle } from '../../config/config';

class FindAGift extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Find a Gift',
		headerStyle,
		headerTitleStyle,
		headerTintColor: config.COLOR.secondary,
		// headerLeft: <Icon
		//     name='chevron-left'
		//     color={COLOR.primary}
		//     onPress={() => navigation.goBack()}
		// />,
		headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
			<Icon
				size={15}
				name='chat'
				color={COLOR.secondary}
				onPress={() => navigation.goBack()}
			/>
			<Text style={{ marginLeft: 5, color: COLOR.secondary }}>Chat</Text>
		</View>
	})
	render() {
		const { sectionHead, sectionList, sectionContainer, marginB } = styles;
		return (
			<ScrollView style={{ backgroundColor: '#f8f8f8' }}>
				<View style={[sectionContainer, marginB]}>
					<View style={sectionHead}>
						<Image
							style={{ width: 100, height: 100, marginBottom: 15 }}
							source={avatar}
						/>
						<Text style={{ fontWeight: '600', marginBottom: 5 }}>Hai Nguyen</Text>
						<Text style={{ fontSize: 14 }}>Birthday | $200-500</Text>
					</View>
				</View>

				<View style={sectionContainer}>
					<View>
						<View style={sectionList}>
							<View style={styles.line} />
							<View style={styles.dot} />
							<View style={{ paddingBottom: 15 }}>
								<Text style={styles.listTitle}>LOOKING</Text>
								<Text>
									We’ll report back promptly with wonderful gifts for HAI NGUYEN.
                                </Text>
							</View>
						</View>

						<View style={sectionList}>
							<View style={styles.line} />
							<View style={styles.dot} />
							<View style={{ paddingBottom: 15 }}>
								<Text style={styles.listTitle}>GIFTS READY</Text>
							</View>
						</View>

						<View style={sectionList}>
							<View style={styles.line} />
							<View style={styles.dot} />
							<View style={{ paddingBottom: 15 }}>
								<Text style={styles.listTitle}>ORDERED</Text>
							</View>
						</View>

						<View style={sectionList}>
							<View style={styles.line} />
							<View style={styles.dot} />
							<View style={{ paddingBottom: 15 }}>
								<Text style={styles.listTitle}>SHIPPED</Text>
							</View>
						</View>
						<View style={sectionList}>
							<View style={styles.line} />
							<View style={styles.dot} />
							<View style={{ paddingBottom: 15 }}>
								<Text style={styles.listTitle}>DELEVERED</Text>
							</View>
						</View>
					</View>

				</View>

				<View style={{ alignItems: 'center', marginVertical: 30 }}>
					<Btn
						style={{ width: 150 }}
						title="DONE"
						bgColor={COLOR.primary}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	wraper: {
		padding: 15
	},

	marginB: {
		marginBottom: 15
	},

	sectionContainer: {
		display: 'flex',
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'center'
	},

	sectionHead: {
		padding: 15,
		width: WIDTH_SCREEN - 100,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	sectionList: {
		paddingLeft: 5,
		paddingRight: 5,
		width: WIDTH_SCREEN - 100,
		flexDirection: 'row'
	},

	listTitle: {
		paddingBottom: 10,
		fontWeight: '600',
		color: COLOR.primary
	},

	line: {
		width: 1,
		backgroundColor: '#ddd'
	},

	dot: {
		width: 16,
		height: 16,
		borderRadius: 10,
		borderColor: '#ddd',
		borderWidth: 1,
		top: 2,
		left: -8,
		marginRight: 10,
		backgroundColor: '#fff'
	}
});


export default FindAGift;
