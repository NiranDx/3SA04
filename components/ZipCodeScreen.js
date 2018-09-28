import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, ImageBackground } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },]

const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })} style={{ color: 'grey' }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code

export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <ImageBackground source={require('./se.jpg')} style={{ width: '100%', height: '100%' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, width: '100%' }}>
                        Choose a zip code</Text>
                </ImageBackground>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ImageBackground source={require('./bx.jpg')} style={{ width: '100%', height: '100%' }}>
                    <FlatList
                        data={availableZipItems}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                    /></ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
        margin: 20
    },
    zipPlace: {
        flex: 2


    },
    zipCode: {
        flex: 1
    }
});

