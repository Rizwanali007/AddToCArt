import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux'

const CartIcon = ((props) => {
    const mapStateToProps = (state) => {
        return {
            cartItems: state
        }
      }
    
  return (
    <View style={{padding:5}}>
        <View style={{position:"absolute",height: 30, width: 30, 
                      borderRadius:10,backgroundColor:"skyblue",
                      alignItems:"center",right:25,bottom:15,
                      justifyContent:'center'}}>
            <Text style={{color:"white", fontWeight:"bold"}}>{props.cartItems.length}</Text>
        </View>
      <FontAwesome5 name='cart-plus' size={25} color={'#f15454'}/>
    </View>
  )
  
}

export default connect()(CartIcon)