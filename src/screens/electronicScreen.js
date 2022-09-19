import { View, Text } from 'react-native'
import React from 'react'
import { electronics } from '../../assets/data'
import Products from '../components/products'

const ElectronicScreen = () => {
  return (
    <View>
      <Products products={electronics}/>
    </View>
  )
}

export default ElectronicScreen