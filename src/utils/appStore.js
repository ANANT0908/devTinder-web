import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import feedReducer from "./feedSlice";
import connectionReducer from "./conectionSlice";
import requestReducer from "./requestSlice";


const appStore = configureStore({
reducer:{
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requests: requestReducer,
}
})


export default appStore