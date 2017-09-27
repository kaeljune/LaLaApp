import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextField from '../../../components/TextField';

import { STYLES } from '../../../config/config';

class UserInfo extends PureComponent {
	render() {
		const { data, edit } = this.props;
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
							editable={edit}
						/>
					</View>
					<View style={row}>
						<TextField
							label="Email"
							labelStyle={label}
							value={data.userLogin.email}
							onChangeText={this.onEmailChange}
							editable={edit}
						/>
					</View>
					<View style={row}>
						<TextField
							label="Phone number"
							labelStyle={label}
							value={data.userLogin.phone}
							onChangeText={this.onEmailChange}
							editable={edit}
						/>
					</View>
					<View style={row}>
						{console.log('edit', edit)}
						{ edit ? (
							<TextField
								label="Address"
								labelStyle={label}
								value={data.userLogin.address}
								onChangeText={this.onEmailChange}
								editable={edit}
							/>
						)
						: (
							<View>
								<Text style={styles.label}>Address</Text>
								<View
									style={{
										borderBottomColor: '#ccc',
										borderBottomWidth: 1,
										paddingVertical: 15,
									}}
								>
									<Text style={{ fontSize: 16 }}>{data.userLogin.address}</Text>
								</View>
							</View>
						) }
					</View>
				</View>
			</View>
		)
	}
}


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
