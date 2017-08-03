import React from 'react';
import { View, StyleSheet } from 'react-native';
import Btn from '../../../components/Btn';

import { COLOR } from '../../../config/config';

function SignoutButton() {
	return (<View style={styles.wrapBtn}>
			<Btn
				bgColor={COLOR.primary}
				title="Sign Out"
			/>
		</View>);
}

const styles = StyleSheet.create({
	wrapBtn: {
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	}
});

export default SignoutButton;
