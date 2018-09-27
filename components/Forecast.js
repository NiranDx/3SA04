import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ textAlign: 'center', fontSize: 30, color: 'white' }}>{"\n"}{this.props.main}</Text>
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}>{"\n"}{this.props.description}</Text>
                <Text style={{ textAlign: 'center', fontSize: 32, color: 'white' }}>{"\n"}{this.props.temp}
                    <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}> °C</Text>
                </Text>
                <Text style={{textAlign: 'center', color: 'skyblue',fontSize: 12 }}>BY: Niran Sasooloh{"\n"} ID: 5935512021</Text>

            </View>
        );
    }
}
