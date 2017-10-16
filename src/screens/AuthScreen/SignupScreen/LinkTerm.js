import React from 'react';
import {
	TouchableOpacity,
	Text,
} from 'react-native';

import * as config from '../../../config/config';

const LinkTerm = (props) =>
	<TouchableOpacity onPress={props.onTerms}>
		<Text
			style={{
				textAlign: 'center',
				lineHeight: 20,
				paddingBottom: 15,
				paddingTop: 15
			}}
		>
			<Text style={{ color: '#858585' }}>
				By pressing continue, you are agreeing to be bound by Airlala’s
			</Text>
			<Text style={{ fontWeight: '700', color: config.COLOR.primary }}>
				&nbsp; Terms of Use and Privacy Policy.
			</Text>
		</Text>
	</TouchableOpacity>;

export default LinkTerm;
