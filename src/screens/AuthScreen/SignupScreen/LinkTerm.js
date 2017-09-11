import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import * as config from '../../../config/config';

class LinkTerm extends Component {
    render() {
        return (
            <View
                style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 12,
                        width: (config.WIDTH_SCREEN - 50),
                        textAlign: 'center',
                        lineHeight: 20,
                        paddingBottom: 15,
                        paddingTop: 15
                    }}
                >
                    <Text style={{ color: '#5A5A5A' }}>
                        By pressing continue, you are agreeing to be bound by Airlala’s
                    </Text>
                    <Text
                        style={{ fontWeight: '700', color: config.COLOR.primary }}
                        onPress={this.props.onTerms}
                    >
                        &nbsp; Terms of Use and Privacy Policy.
                    </Text>
                </Text>
            </View>
        );
    }
}

export default LinkTerm;
