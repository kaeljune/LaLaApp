import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Platform,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
//import { accountFetch } from '../../../actions';

import { COLOR, headerTitleStyle, headerStyle } from '../../../config/config';
import Spinner from '../../../components/Spinner';
import TitleAvatar from './TitleAvatar';
import UserInfo from './UserInfo';
import Services from './Services';

class ProfileScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Profile Setting',
		headerTintColor: COLOR.primary,
		headerLeft: <TouchableOpacity onPress={() => navigation.navigate('isFindGift')}><Icon
			name='clear'
			color='#313131'
			size={24}
			style={{ marginLeft: 15 }}
		//onPress={() => navigation.navigate('mainGift')}
		/></TouchableOpacity>,
		headerRight: <TouchableOpacity onPress={navigation.navigate('editprofile')}>
			<View
				style={{
					paddingRight: 15,
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<Icon name="edit" color={COLOR.primary} />
			</View>
		</TouchableOpacity>,
		headerTitleStyle,
		headerStyle,
	})

	state = {
		userLogin: null,
		edit: 'fjsf'
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
			return <View style={styles.container}><Spinner color="#fff" /></View>;
		}
		return (
			<KeyboardAwareScrollView
				style={{ backgroundColor: '#f8f8f8' }}
				scrollEnabled
				animated
			>
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
			</KeyboardAwareScrollView>
		);
	}
}

const mapStateToProps = ({ fetchAcc }) => {
	const { account } = fetchAcc;
	return { account };
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8f8',
	}
});

export default connect(mapStateToProps, {})(ProfileScreen);
