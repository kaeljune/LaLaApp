import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UserInfo = ({ data }) => {
	const { list, row, label } = styles;
	return (
		<View style={{ marginHorizontal: 20 }}>
			<Text style={{ marginVertical: 15, textAlign: 'center', fontSize: 18 }}>Profile User </Text>
			<View style={list}>
				<View style={row}>
					<Text style={label}>EMAIL</Text>
					<Text>{data.userLogin.email}</Text>
				</View>
				<View style={row}>
					<Text style={label}>PHONE NUMBER</Text>
					<Text>{data.userLogin.phone}</Text>
				</View>
			</View>
		</View>
	);
};

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
