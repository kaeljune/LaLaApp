import React, { Component } from 'react';
import { Text, ScrollView, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';

import logo from '../../assets/images/logo.png';
import backgroundImage from '../../assets/images/bg.png';

const { width, height } = Dimensions.get('window');

class Slides extends Component {
    state = { }
    
    renderLastSlide(index) {
        const { data, onComplete } = this.props;
        if (index === data.length - 1) {
            return (
                <Button
                    title='START'
                    onPress={onComplete}
                    backgroundColor='#11B8AB'
                    fontSize={14}
                    buttonStyle={{ width, height: 50 }}
                />
            );
        }
        if (index !== data.length - 1) {
            return (
                <Button
                    title='SKIP'
                    onPress={onComplete}
                    backgroundColor='#11B8AB'
                    fontSize={14}
                    buttonStyle={{ width, height: 50 }}
                />
            );
        }
    }
    renderSlides() {
        return this.props.data.map((slide, index) => (
                <Image 
                    source={backgroundImage} 
                    key={slide.text} 
                    style={styles.slide}
                >
                    <Image source={logo} style={styles.logoStyle} />
                    <Text style={styles.textStyle}>{ slide.text }</Text>
                    {this.renderLastSlide(index)}
                </Image>
            ));
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
            >
                {this.renderSlides()}
                
            </ScrollView>
        );
    }
}

const styles = {
    slide: {
        flex: 1,
        alignItems: 'center',
        width,
        height,
        justifyContent: 'space-between'
    },
    logoStyle: {
        resizeMode: 'contain',
        width: 275,
        //height: 40,
        marginTop: 120,
    },
    textStyle: {
        width: width - 100,
        fontSize: 16,
        lineHeight: 30,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#313131'
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15
    }
};

export default Slides;
