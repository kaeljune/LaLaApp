import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { signOut, removeQuantity } from '../../../actions';
import { COLOR, STYLES } from '../../../config/config';

import Touch from '../../../components/Touch';

const Services = (props) => <View style={[styles.container, STYLES.boxShadow]}>
		<Touch>
			<View style={[styles.row, styles.border]}>
				<Text style={styles.text}>
					Payment
				</Text>
				<Icon name="payment" color={COLOR.primary} />
			</View>
		</Touch>

		<Touch>
			<View style={[styles.row, styles.border]}>
				<Text style={styles.text}>
					Helps
				</Text>
				<Icon name="help-outline" color={COLOR.primary} />
			</View>
		</Touch>
		<Touch>
			<View style={[styles.row, styles.border]}>
				<Text style={styles.text}>
					Terms &amp; Privacy
				</Text>
				<Icon name="assignment" color={COLOR.primary} />
			</View>
		</Touch>

		<Touch onPress={props.removeQuantity}>
			<View style={[styles.row, styles.border]}>
				<Text style={styles.text}>
					Remove Cache
				</Text>
				<Icon name="cached" color={COLOR.primary} />
			</View>
		</Touch>

		<Touch onPress={props.signOut}>
			<View style={styles.row}>
				<Text style={styles.text}>
					Sign out
				</Text>
				<Icon name="exit-to-app" color={COLOR.primary} />
			</View>
		</Touch>
	</View>;

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
		fontSize: 16,
		color: '#313131'
	}
});

export default connect(null, { signOut, removeQuantity })(Services);
