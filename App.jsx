import React, { useState, useEffect }  from 'react';
import { Text, ScrollView, StyleSheet, View, Button, SafeAreaView, TextComponent } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapView, { Marker } from 'react-native-maps';
import {enableLatestRenderer} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

enableLatestRenderer();
const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                Hello there! This is Home screen!
            </Text>
            <Button 
            onPress = {() => navigation.navigate("Other page")}
            title = "Presss me to change page!">
            </Button>
        </View>
    )
}

const OtherScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                Hi! This is other screen!
            </Text>
        </View>
    )
}

// Create styles for map view + container
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    map: {
        ...StyleSheet.absoluteFillObject
    },
});

const MapScreen = ({navigation}) => {
    // Credit: https://stackoverflow.com/a/72024449
    const [position, setPosition] = useState({
        latitude: 36.997656,
        longitude: -122.060186,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });

    var m = [];

    // useEffect - update elements after render
    // https://reactjs.org/docs/hooks-effect.html
    // Geolocation not working atm
    useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
        const crd = pos.coords;
        setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
        });
    }, (err) => {
        console.log(err);
    })}, []);

    // https://stackoverflow.com/q/9808560
    const locations = fetch('http://10.0.2.2:8000/locations')
    .then(response => response.json())
    .then(j => pos = j.map(e => {
        console.log(e)
        return ( <Marker title = 'hi' position={{
            latitude: 36.997656,
            longitude: -122.060186,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        }
    }>
    </Marker>);
    }))
    .catch(error => {
        console.log(error)
    })

    return (
        <MapView
        style={styles.map}
        initialRegion={position}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}>
         </MapView>
    );  
}

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name = "Map"
                component = {MapScreen}
                options = {{}}>
                </Stack.Screen>
                {/* <Stack.Screen 
                name = "Other page"
                component = {OtherScreen}>
                </Stack.Screen> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;