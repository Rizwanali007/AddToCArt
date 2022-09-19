import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Products = (props) => {

    const renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            console.log("MAPPP",item)
            return (
                <View key={index} style={{ padding: 20 }}>
                    <TouchableOpacity onPress={() => props.onPress(item)} title={item.name + "-" + item.price}>
                        <Text>{item.name}{"\n"}{item.price}</Text>
                    </TouchableOpacity>

                </View>
                
            )
        })

    }

    return(
        <View style={{}}>{renderProducts(props.products)}</View>
    )

}

export default Products