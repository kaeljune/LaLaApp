import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from '../../../components/TextField';

import { STYLES } from '../../../config/config';

const UserInfo = ({ data }) => {
	const { list, row, label } = styles;
	return (
		<View style={[styles.container, STYLES.boxShadow]}>
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
		backgroundColor: '#fff'
	},
	list: {	
		padding: 15,
	},
	row: {
		marginBottom: 5	
	},
	label: {
		fontSize: 14,
		color: '#858585'
	}
});

export default UserInfo;
