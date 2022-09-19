import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ElectronicScreen from '../screens/electronicScreen';
import Books from '../screens/books';
import CartIcon from '../components/cartIcon';



const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: true, headerRight: () => (
                <CartIcon />
            ) }}   >
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="ElectronicScreen" component={ElectronicScreen} />
            <Stack.Screen name="BooksScreen" component={Books} />
        </Stack.Navigator>
    )
}

export default AppNavigator