import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState:{
        value: "women",
    },
    reducers:{
        changeCategory: (state, action)=>{
            state.value = action.payload;
        }
    }
})

export const {changeCategory} = categorySlice.actions;
export default categorySlice.reducer;