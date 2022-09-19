import { configureStore } from '@reduxjs/toolkit'
import cartItems from '../reducers/cartItems'

export default configureStore({
    reducer: {cartItems},
  })