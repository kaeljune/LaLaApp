import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	AsyncStorage
} from 'react-native';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
//import { accountFetch } from '../../../actions';

import { COLOR, headerTitleStyle, headerStyle } from '../../../config/config';
import { Spinner } from '../../../components/Spinner';
import TitleAvatar from './TitleAvatar';
import UserInfo from './UserInfo';
import Services from './Services';

class ProfileScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Profile Setting',
		headerTintColor: COLOR.primary,
		headerLeft: <TouchableWithoutFeedback onPress={() => navigation.navigate('isFindGift')}><Icon
			name='clear'
			color='#313131'
			size={24}
			style={{ marginLeft: 15 }}
			//onPress={() => navigation.navigate('mainGift')}
		/></TouchableWithoutFeedback>,
		headerRight:
		<TouchableWithoutFeedback>
			<View
				style={{	
					paddingRight: 15,
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<Icon name="check" color={COLOR.secondary} />	
				<Text style={{ marginLeft: 5 }}>Update</Text>
			</View>
		</TouchableWithoutFeedback>,
		headerTitleStyle,
		headerStyle,
	})
	state = {
		userLogin: null
	};

	async componentWillMount() {
		//await this.props.accountFetch();
		const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
		if (JSON.parse(fetchAcc).isLogin) {
			this.setState({ userLogin: JSON.parse(fetchAcc) });
		} else {
			this.setState({ isLogin: false });
		}
	}

	render() {
		//const { state } = this.props.navigation.params;
		if (!this.state.userLogin) {
			return (<View 
				style={{ 
					flex: 1, 
					alignItems: 'center', 
					justifyContent: 'center', 
					backgroundColor: '#fff'
				}}
			><Spinner /></View>);
		}
		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8' }} contentContainerStyle={{ paddingBottom: 20 }}>
				<KeyboardAvoidingView behavior={'position'}>
					<View>
						<View 
							style={{
								backgroundColor: COLOR.primary, 
								height: 330, 
								position: 'absolute',
								top: 0, 
								left: 0, 
								right: 0,
							}}
						/>
						<TitleAvatar data={this.state.userLogin} />
						<UserInfo data={this.state.userLogin} />
						
						<Services />
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ fetchAcc }) => {
	const { account } = fetchAcc;
	return { account };
};


export default connect(mapStateToProps, {})(ProfileScreen);
