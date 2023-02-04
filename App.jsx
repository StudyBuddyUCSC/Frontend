import * as React from 'react';
import { Text, ScrollView, View, Button, SafeAreaView, TextComponent } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name = "Home Screen"
                component = {HomeScreen}>
                </Stack.Screen>
                <Stack.Screen 
                name = "Other page"
                component = {OtherScreen}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;