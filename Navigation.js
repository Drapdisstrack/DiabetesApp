import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../DiabetesApp/views/Home';
import Memorama from '../DiabetesApp/views/Memorama';


const MainStackNavigator = createStackNavigator();

function MainStack() {
    return (
        <MainStackNavigator.Navigator>
            <MainStackNavigator.Screen name='HomeScreen' component={Home} options={{ headerShown: false }} />
            <MainStackNavigator.Screen name='Memorama' component={Memorama} options={{ headerShown: false }} />

        </MainStackNavigator.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}
