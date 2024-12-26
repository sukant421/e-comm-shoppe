import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../navBar/categorySlice";


export default configureStore({
    reducer: {
        category: categoryReducer,
    },
})