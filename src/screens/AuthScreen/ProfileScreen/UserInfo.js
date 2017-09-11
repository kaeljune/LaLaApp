import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextField from '../../../components/TextField';

const UserInfo = ({ data }) => {
	const { list, row, label } = styles;
	return (
		<View style={styles.container}>
			<View style={list}>
				<View style={row}>
					<TextField 
						label="User name"
						labelStyle={label}
						value={data.userLogin.name}	
						onChangeText={this.onEmailChange}
					/>
				</View>
				<View style={row}>
					<TextField 
						label="Email"
						labelStyle={label}
						value={data.userLogin.email}	
						onChangeText={this.onEmailChange}
					/>
				</View>
				<View style={row}>
					<TextField 
						label="Phone number"
						labelStyle={label}
						value={data.userLogin.phone}	
						onChangeText={this.onEmailChange}
					/>
				</View>
				<View style={row}>
					<TextField 
						label="Address"
						multiline
						numberOfLines={4}
						labelStyle={styles.label}
						value="3 Floor, IFA Building, 04 Nguyen Thi Minh Khai, Da Kao, 1 District, HCMC, VN"	
						onChangeText={this.onEmailChange}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 15,	
		borderColor: '#ddd',
		borderWidth: 1
	},
	list: {
		backgroundColor: '#fff',
		padding: 15,
	},
	row: {
		marginBottom: 5
		// paddingHorizontal: 15 
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		// alignItems: 'center',
		// borderBottomColor: '#eee',
		// borderBottomWidth: 1
	},
	label: {
		fontSize: 16,
		fontWeight: '600',
		color: '#858585'
	}
});

export default UserInfo;
