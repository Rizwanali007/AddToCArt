import { View, Text } from 'react-native'
import React from 'react'
import { books } from '../../assets/data'
import Products from '../components/products'

const Books = () => {
    
  return (
    <View>
      <Products products={books}/>
    </View>
  )
}

export default Books