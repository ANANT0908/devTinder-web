import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import feedReducer from "./feedSlice";

const appStore = configureStore({
reducer:{
    user: userReducer,
    feed: feedReducer,

}
})


export default appStore