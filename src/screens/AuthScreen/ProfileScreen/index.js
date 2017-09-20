import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
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
<<<<<<< HEAD
				style={{	
=======
				style={{
>>>>>>> 043710a84f99f0935cf682515327a77a12da56d1
					paddingRight: 15,
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
<<<<<<< HEAD
				<Icon name="check" color={COLOR.secondary} />	
				<Text style={{ marginLeft: 5 }}>Update</Text>
=======
				<Icon name="edit" color={COLOR.primary} />
>>>>>>> 043710a84f99f0935cf682515327a77a12da56d1
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
<<<<<<< HEAD
			return (<View 
				style={{ 
					flex: 1, 
					alignItems: 'center', 
					justifyContent: 'center', 
					backgroundColor: '#fff'
				}}
			><Spinner /></View>);
=======
			return <View style={styles.container}><Spinner color="#fff" /></View>;
>>>>>>> 043710a84f99f0935cf682515327a77a12da56d1
		}
		return (
			<KeyboardAwareScrollView
				style={{ backgroundColor: '#f8f8f8' }}
				scrollEnabled={true}
				animated={true}
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
<<<<<<< HEAD
						
=======

>>>>>>> 043710a84f99f0935cf682515327a77a12da56d1
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
