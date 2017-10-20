import _ from 'lodash';
import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import { Avatar } from 'react-native-elements';

import { COLOR } from '../../config/config';
// import avatar from '../../../assets/images/avatar.png';

class Feature extends Component {
	render() {
		const name = this.props.user.receiverName ? this.props.user.receiverName : 'Anonymous';
		const shortName = _.toUpper(name.match(/\b\w/g).join(''));
		const { sectionContainer, sectionHead, avatarStyle } = styles;
		return (
			<View style={sectionContainer}>
				<View style={sectionHead}>
					<Avatar
						rounded
						height={100}
						width={100}
						avatarStyle={{ borderColor: '#fff', borderWidth: 1 }}
						style={avatarStyle}
						title={shortName}
					/>

					<Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5, color: '#fff' }}>{name}</Text>
					<Text style={{ fontSize: 14, color: '#eee' }}>for {this.props.user.occasion}</Text>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	sectionContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: COLOR.primary,
	},
	sectionHead: {
		paddingVertical: 30,
		alignItems: 'center',
	},
	avatarStyle: {
		marginBottom: 20,
	}
});

export default Feature;
