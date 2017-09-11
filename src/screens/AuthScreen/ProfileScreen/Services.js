import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';

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
						textAlign: 'center',
						marginTop: 30,
						marginBottom: 20, 
						fontSize: 20,
						fontWeight: '400',
						color: '#858585'
					}}
				>Other settings</Text>

				<View style={{ marginHorizontal: 15, backgroundColor: '#fff', borderColor: '#ddd', borderWidth: 1 }}>
					<View>
						<TouchableWithoutFeedback>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
								<Text style={{ fontSize: 16, color: '#313131' }}>
									Payment
								</Text>
								<Icon name="payment" color={COLOR.primary} />
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View>
						<TouchableWithoutFeedback>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
								<Text style={{ fontSize: 16, color: '#313131' }}>
									Helps
								</Text>
								<Icon name="help-outline" color={COLOR.primary} />
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View>
						<TouchableWithoutFeedback>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
								<Text style={{ fontSize: 17, color: '#313131' }}>
									Terms &amp; Privacy
								</Text>
								<Icon name="assignment" color={COLOR.primary} />
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
			
			</View>
		);
	}
}

export default Services;
