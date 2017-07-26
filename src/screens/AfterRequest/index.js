import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

import SectionHead from './SectionHead';
import SectionMessage from './SectionMessage';
import LookingButton from './LookingButton';
import Btn from '../../components/Btn';
import { COLOR, headerStyle, headerTitleStyle } from '../../config/config';

class AfterRequest extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'After Request',
        headerTintColor: COLOR.primaryFont,
        headerLeft: <Icon
            name='chevron-left'
            color={COLOR.primary}
            size={24}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.goBack()}
        />,
        headerRight: <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
            <Icon
                size={15}
                name='chat'
                color={COLOR.secondary}
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 5, color: COLOR.secondary }}>Chat</Text>
        </View>,
        headerTitleStyle,
        headerStyle,
    })
    render() {
        const { wraper } = styles;
        return (
            <View style={wraper}>
                <SectionHead />
                <LookingButton />
                <SectionMessage />
                <Btn
                    colors={['#11B8AB', '#65C5B9']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    onPress={this.onPress}    
                >
                    DONE
                </Btn>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        padding: 15
    },
});

export default AfterRequest;
