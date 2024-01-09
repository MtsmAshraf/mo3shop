import allProducts from "../../Assests/all_product"
import { createSlice } from "@reduxjs/toolkit"


const initialState = { value: allProducts }
const allProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers:{},
})

export default allProductsSlice.reducer;