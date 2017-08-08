import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const listProfile = [
	{
		title: 'EMAIL',
		rightTitle: 'hainguyen@airlala.com',
	},
	{
		title: 'PHONE NUMBER',
		rightTitle: '(+84) 935 38 39 40',
	},
];

function UserInfo() {
	return (
		<View style={{ marginHorizontal: 20 }}>
			<Text style={{ marginVertical: 15, textAlign: 'center', fontSize: 18 }}>Profile User </Text>
			<View style={styles.list}>
				{
					listProfile.map((item, i) => (
						<View key={i} style={styles.row}>
							<Text style={styles.label}>{item.title}</Text>
							<Text>{item.rightTitle}</Text>
						</View>
					))
				}
			</View>
		</View>);
}

const styles = StyleSheet.create({
	list: {
		backgroundColor: '#fff',
	},
	row: {
		paddingVertical: 15, 
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomColor: '#eee',
		borderBottomWidth: 1
	},
	label: {
		fontSize: 12,
		color: '#5a5a5a'
	}
});

export default UserInfo;
