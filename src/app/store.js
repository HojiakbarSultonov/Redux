import { configureStore } from "@reduxjs/toolkit"; 
import CounterSlice from "../features/counter/CounterSlice";
import PostsSlice from "../features/posts/PostsSlice";


export const store = configureStore({
    reducer:{
        counter:CounterSlice,
        posts:PostsSlice

    }
})
