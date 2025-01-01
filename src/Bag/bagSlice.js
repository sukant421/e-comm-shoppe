import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: "bag",
    initialState:{
        value: [],
    },
    reducers:{
        addToBag: (state, action)=>{
            state.value = [...state.value, action.payload]
        }
    }
})

export const {addToBag} = bagSlice.actions;
export default bagSlice.reducer;