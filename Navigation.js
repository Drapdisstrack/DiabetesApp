import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from "./views/Welcome";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from '../DiabetesApp/views/Home';
import Memorama from '../DiabetesApp/views/Memorama';


const MainStackNavigator = createStackNavigator();

function MainStack() {
    return (
        <MainStackNavigator.Navigator initialRouteName="WelcomeScreen">

            <MainStackNavigator.Screen name='WelcomeScreen' component={Welcome} options={{ headerShown: false }} />
            <MainStackNavigator.Screen name='SignUpScreen' component={SignUp} options={{ headerShown: false, headerBackTitleStyle: false }} />
            <MainStackNavigator.Screen name='SignInScreen' component={SignIn} options={{ headerShown: false, headerBackTitleStyle: false }} />
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
