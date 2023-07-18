import { configureStore } from "@reduxjs/toolkit"; 
import CounterSlice from "../features/counter/CounterSlice";
import PostsSlice from "../features/posts/PostsSlice";
import UserSlice from "../features/users/UserSlice";


export const store = configureStore({
    reducer:{
        counter:CounterSlice,
        posts:PostsSlice,
        users:UserSlice

    }
})
