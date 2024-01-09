import allProducts from "../../Assests/all_product"
import { createSlice } from "@reduxjs/toolkit"

console.log(typeof allProducts)
console.log(allProducts.length)

const getDefaultCart = () => {
    let cart = {}; 
    for (let i = 0; i < allProducts.length + 1 ; i++) {
        cart[i] = 0;
    }
    return cart;
}

const initialState = { value: getDefaultCart() }
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        clearItemG: (state, itemId) => {
            state.value = {
                ...state.value,
                [itemId.payload]: 0,
            }
            console.log(state.value)
            console.log(itemId.payload, ": ", state.value[itemId.payload])
        },
        addToCartG: (state, itemId) => {
            state.value = {
                ...state.value,
                [itemId.payload]: state.value[itemId.payload] + 1,
            }
            console.log(state.value)
            console.log(itemId.payload, ": ", state.value[itemId.payload])
        },
        removeFromCartG: (state, itemId) => {
            if(state.value[itemId.payload] > 0){
                state.value = {
                    ...state.value,
                    [itemId.payload]: state.value[itemId.payload] - 1,
                }
            }
            else{
                state.value = {
                    ...state.value,
                    [itemId.payload]: state.value[itemId.payload],
                }
            }        
            console.log(state.value)
        }
    },
})
export const { addToCartG , removeFromCartG , clearItemG } = cartSlice.actions;
export default cartSlice.reducer;