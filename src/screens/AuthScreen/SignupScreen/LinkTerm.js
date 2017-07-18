import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { WIDTH_SCREEN } from '../../../config/config';

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
                        width: (WIDTH_SCREEN - 50),
                        textAlign: 'center',
                        paddingBottom: 15,
                        paddingTop: 15
                    }}
                >
                    <Text style={{ color: '#5A5A5A' }}>
                        By pressing continue, you are agreeing to be bound by Airlala’s
                            </Text>
                    <Text
                        style={{ fontWeight: 'bold', color: '#11B8AB' }}
                        onPress={this.onTerms}
                    >
                        Terms of Use and Privacy Policy.
                            </Text>
                </Text>
            </View>
        );
    }
}

export default LinkTerm;
