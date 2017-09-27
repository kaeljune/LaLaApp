import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { signOut, removeQuantity } from '../../../actions';


import { COLOR, STYLES } from '../../../config/config';

class Services extends Component {
	render() {
		return (

			<View style={[styles.container, STYLES.boxShadow]}>
				<View>
					<TouchableWithoutFeedback>
						<View style={[styles.row, styles.border]}>
							<Text style={{ fontSize: 16, color: '#313131' }}>
								Payment
								</Text>
							<Icon name="payment" color={COLOR.primary} />
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View>
					<TouchableWithoutFeedback>
						<View style={[styles.row, styles.border]}>
							<Text style={{ fontSize: 16, color: '#313131' }}>
								Helps
								</Text>
							<Icon name="help-outline" color={COLOR.primary} />
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View>
					<TouchableWithoutFeedback>
						<View style={[styles.row, styles.border]}>
							<Text style={{ fontSize: 17, color: '#313131' }}>
								Terms &amp; Privacy
								</Text>
							<Icon name="assignment" color={COLOR.primary} />
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View>
					<TouchableWithoutFeedback
						onPress={this.props.removeQuantity}
					>
						<View style={[styles.row, styles.border]}>
							<Text style={{ fontSize: 17, color: '#313131' }}>
								Remove Cache
								</Text>
							<Icon name="cached" color={COLOR.primary} />
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View>
					<TouchableWithoutFeedback
						onPress={this.props.signOut}
					>
						<View style={styles.row}>
							<Text style={{ fontSize: 17, color: '#313131' }}>
								Sign out
								</Text>
							<Icon name="exit-to-app" color={COLOR.primary} />
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 15,
		backgroundColor: '#fff',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
	},
	border: {
		borderBottomColor: '#eee', borderBottomWidth: 1
	},
	text: {
		marginLeft: 15,
		marginTop: 30,
		marginBottom: 20,
		fontSize: 14,
		fontWeight: '600',
		color: '#313131'
	}
});

export default connect(null, { signOut, removeQuantity })(Services);
