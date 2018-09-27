import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'mian', description: 'description', temp: 0
            }
        }
    }
    fetchData = () => {     
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=e763838a6b1fa5ff00644701df61d559`)       
        .then((response) => response.json())       
        .then((json) => {         
            this.setState(           
            {             
                forecast: {               
                    main: json.weather[0].main,               
                    description: json.weather[0].description,               
                    temp: json.main.temp             
                }           
            });       
        })       
        .catch((error) => {         
            console.warn(error);       
        });   
    }     
    componentDidMount = () => this.fetchData()
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

