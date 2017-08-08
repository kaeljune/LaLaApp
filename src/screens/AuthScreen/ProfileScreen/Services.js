import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { COLOR } from '../../../config/config';

const listLink = [
	{
		title: 'Payment',
	},
	{
		title: 'My Address',
	},
	{
		title: 'Terms & Privacy',
	},
	{
		title: 'Helps',
	},
];

class Services extends Component {
	render() {
		return (
			<View>
				<Text
					style={{ 
						marginTop: 20, 
						textAlign: 'center', 
						fontSize: 18
					}}
				>Other settings</Text>
				<List 
					containerStyle={{ 
						marginHorizontal: 20, 
						borderColor: 'transparent', 
						borderBottomWidth: 0, 
					}}
				>
					{
						listLink.map((item, i) => (
							<ListItem
								key={i}
								title={item.title}
								chevronColor={COLOR.secondary}
							/>
						))
					}
				</List>
			</View>
		);
	}
}

export default Services;
