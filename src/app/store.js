import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../components/BookSlice";

const store=configureStore({
    reducer:{
        bookReducer:BookSlice,
    }
})
export default store;