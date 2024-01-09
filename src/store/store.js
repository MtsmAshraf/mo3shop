import { configureStore } from "@reduxjs/toolkit"
import allProductsReducer from "./all-products/allProducts"
import cartReducer from "./cart/cartSlice"
import { addToCart , removeFromCart } from "./cart/cartSlice";
const store = configureStore({
    reducer: {
        allProducts: allProductsReducer,
        cart: cartReducer,
    },
})

export default store;