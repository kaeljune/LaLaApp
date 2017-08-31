import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import _ from 'lodash';

import { accountFetch, navLogin, navLogout } from '../../actions';
import { COLOR } from '../../config/config';

class SplashScreen extends Component {
    state = {
        userLogin: null,
        isLogin: null
    };
    async componentWillMount() {
        //await AsyncStorage.removeItem('reduxPersist:fetchAcc');
        await this.props.accountFetch();
        const fetchAcc = await AsyncStorage.getItem('reduxPersist:fetchAcc');
        if (JSON.parse(fetchAcc).isLogin) {
            await this.setState({ isLogin: JSON.parse(fetchAcc).isLogin });
        } else {
            await this.setState({ isLogin: false });
        }
    }
	render() {
		if (_.isNull(this.state.isLogin)) {
            return <AppLoading />;
        }
		return (
			<View style={styles.container}>
				<Text>Loading</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.background,
	},
});

const mapStateToProps = ({ fetchAcc }) => {
    const { account } = fetchAcc;
    return { account };
  };

export default connect(mapStateToProps, { accountFetch, navLogin, navLogout })(SplashScreen);
