import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
import storeSlice from './storeSlice';

const store = configureStore({
    reducer:{
        storeSlice,
        cart : cartSlice
    },
});








export default store;