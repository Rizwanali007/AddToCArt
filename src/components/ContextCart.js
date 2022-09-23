import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useContext, } from 'react'
import screenNames from '../helpers/screenNames';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CartContext } from './ShowCart';

const ContextCart = ({navigation}) => {

    const { item, removeItem, clearCart, increment, decrement, totalItem, totalAmount } = useContext(CartContext)


    if (item.length === 0) {
        return (
            <>
                <View style={{ marginTop: 50 }}>
                    <View style={{
                        position: "absolute", height: 30, width: 30,
                        borderRadius: 10, backgroundColor: "skyblue",
                        alignItems: "center", right: 25, bottom: 15,
                        justifyContent: 'center',
                    }}>
                        <Text style={{ color: "white", fontWeight: "bold", }}>0</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 330, marginTop: -40 }}>
                    <FontAwesome5 name="shopping-cart" size={25} />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20, textDecorationLine: 'underline' }}>Shopping Cart</Text>
                    <Text style={{ marginLeft: 20, marginTop: 5, fontWeight: "500" }}>you have 0 items in shopping cart</Text>
                </View>
                <View style={{ marginTop: 25, alignItems: "center" }}></View>
            </>
        )
    }

    return (
        <View style={{ height: 450 }}>
            <View style={{ marginTop: 50 }}>
                <View style={{
                    position: "absolute", height: 30, width: 30,
                    borderRadius: 10, backgroundColor: "skyblue",
                    alignItems: "center", right: 25, bottom: 15,
                    justifyContent: 'center', marginRight: 8
                }}>
                    <Text style={{ color: "white", fontWeight: "bold", }}>{totalItem}</Text>
                </View>
            </View>
            <View style={{ marginLeft: 320, marginTop: -40, }}>
                <FontAwesome5 name="shopping-cart" size={25} />
            </View>
            <View style={{ marginLeft: 15, marginTop: -15 }}>
                <TouchableOpacity onPress={() => {navigation.navigate(screenNames.Home)}}>
                    <Text>Back</Text>
                    {/* <FontAwesome5 name="arrow-left" size={25} /> */}
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: "700", marginLeft: 20, textDecorationLine: 'underline' }}>Shopping Cart</Text>
                <Text style={{ marginLeft: 20, marginTop: 5, fontWeight: "500" }}>you have {totalItem} items in shopping cart</Text>
            </View>
            <View style={{ marginTop: 25, alignItems: "center" }}>
                <FlatList
                    data={item}
                    renderItem={({ item }) => {

                        return (
                            <View style={{ alignItems: "center", marginVertical: 15 }}>
                                <Image style={{ width: 200, height: 100, borderRadius: 10 }} source={{ uri: item.img }} />
                                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "500" }}>Name: {item.title}</Text>
                                <Text style={{ fontWeight: "500" }}>Description: {item.description}</Text>
                                <Text style={{ fontWeight: "500" }}>Price: {item.price}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => decrement(item)}>
                                        <Text style={{ fontSize: 30, fontWeight: "700" }}> - </Text>
                                    </TouchableOpacity>
                                    <View style={{ marginTop: 5, }}>
                                        <Text style={{ fontSize: 25, fontWeight: "400" }}>{item.quantity}</Text>
                                    </View>
                                    <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => increment(item)}>
                                        <Text style={{ fontSize: 30, fontWeight: "700" }}> + </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10 }} onPress={() => removeItem(item)}>
                                        <Text style={{ fontSize: 20, fontWeight: "500" }}> Remove </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}


                />
            </View>
            <View style={{ alignItems: "center", marginTop: 15, }}>
                <Text style={{ fontWeight: "500" }}> Cart Total: {totalAmount}rs</Text>
                <TouchableOpacity style={{ borderWidth: 1, marginTop: 15, borderRadius: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: "500" }}> CHECKOUT </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 1, marginTop: 15, borderRadius: 10 }} onPress={() => clearCart()} >
                    <Text style={{ fontSize: 20, fontWeight: "500" }}> ClearCart </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContextCart