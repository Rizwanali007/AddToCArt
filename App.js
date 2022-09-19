import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/appNavigator'
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store'
import { Provider } from 'react-redux';


const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  )
}

export default App