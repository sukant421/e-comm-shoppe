import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState:{
        value: [],
    },
    reducers:{
        addToWishList: (state, action)=>{
            state.value = [...state.value, action.payload]
        }
    }
})

export const {addToWishList} = wishListSlice.actions;
export default wishListSlice.reducer;