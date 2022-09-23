import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenNames from '../helpers/screenNames'
import Home from '../screens/Home';
import ShowCart from '../components/ShowCart';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name={screenNames.Home} component={Home} />
                <Stack.Screen name={screenNames.ShowCart} component={ShowCart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator