import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./catSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store;