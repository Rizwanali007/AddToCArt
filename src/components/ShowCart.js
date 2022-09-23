import { } from 'react-native'
import React, { createContext, useEffect, useReducer } from 'react'
import ContextCart from './ContextCart';
import { products } from '../../assets/products';
import { reducer } from '../reducers/reducer';



export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}

const ShowCart = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (item) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: item.id
        })
    }

    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" })
    }

    const increment = (item) => {
        return dispatch({
            type: "INCREMENT",
            payload: item.id
        })
    }

    const decrement = (item) => {
        return dispatch({
            type: "DECREMENT",
            payload: item.id
        })
    }

    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });

    }, [state.item])
    return (

        <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
            <ContextCart />
        </CartContext.Provider>

    )

}

export default ShowCart