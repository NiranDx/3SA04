import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'main', description: 'description', temp: 0
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>

                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ alignSelf: 'stretch', height: 270, backgroundColor: 'black', opacity: .4 }}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>{"\n"}Zip code is {this.props.zipCode}.</Text>
                            <Forecast {...this.state.forecast} />
                            </View>
                        </View>

                </ImageBackground>

            </View>


        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },

});

