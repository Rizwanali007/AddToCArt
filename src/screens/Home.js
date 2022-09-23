import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { products } from '../../assets/products'
import screenNames from '../helpers/screenNames'

const Home = ({ navigation }) => {
    const[productData, setProductData] = useState(products)
    
    return (
        <View style={{ marginTop: 25, alignItems: "center" }}>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20, textDecorationLine: 'underline' }}>Products</Text>
            </View>
                <FlatList
                    data={productData}
                    renderItem={({ item }) => {

                        return (
                            <View style={{ alignItems: "center", marginVertical: 15 }}>
                                <Image style={{ width: 200, height: 100, borderRadius: 10 }} source={{ uri: item.img }} />
                                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "500" }}>Name: {item.title}</Text>
                                <Text style={{ fontWeight: "500" }}>Description: {item.description}</Text>
                                <Text style={{ fontWeight: "500" }}>Price: {item.price}</Text>
                                
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10 }} onPress={() => {navigation.navigate(screenNames.ShowCart)}}>
                                        <Text style={{ fontSize: 20, fontWeight: "500" }}> AddToCart </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}


                />
            </View>
    )
}

export default Home