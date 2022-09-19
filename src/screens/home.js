import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    return (
        <View style={{ alignItems: 'center', marginTop:50 }}>
            <TouchableOpacity onPress={()=>{navigation.navigate("ElectronicScreen")}}>
                <Text style={{}}>ElectronicScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("BooksScreen")}}>
                <Text style={{marginTop:50}}>BooksScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home