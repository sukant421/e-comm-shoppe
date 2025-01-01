import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../navBar/categorySlice";
import bagReducer from "../Bag/bagSlice"
import wishListReducer from "../wishList/WishListSlice"


export default configureStore({
    reducer: {
        category: categoryReducer,
        bag: bagReducer,
        wishList: wishListReducer
    },
})