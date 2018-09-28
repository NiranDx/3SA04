import React from 'react';
import { Button, Text, ImageBackground } from 'react-native';
import Weather from './Weather'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <ImageBackground source={require('./se.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Text style={{ fontSize: 20 }}>Weather</Text>
                </ImageBackground>),
            headerRight: (
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}
                />
            )
        }
    }

    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (
            <Weather zipCode={zipCode} />
        );
    }
}