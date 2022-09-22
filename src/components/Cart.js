import { } from 'react-native'
import React, { createContext, useReducer } from 'react'
import ContextCart from './ContextCart';
import { products } from '../../assets/products';
import { reducer } from '../reducers/reducer';



export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}

const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (item) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: item.id
        })
    }

    const clearCart = () => {
        return dispatch({type: "CLEAR_CART"})
    }

    const increment = (item) => {
        return dispatch ({
            type: "INCREMENT",
            payload: item.id
        })
    }
    return (

        <CartContext.Provider value={{ ...state, removeItem, clearCart, increment }}>
            <ContextCart />
        </CartContext.Provider>

    )

}

export default Cart