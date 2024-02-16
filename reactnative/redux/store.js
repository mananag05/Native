import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../redux/Slices/authslice";

export const ReduxStore = configureStore({
    reducer : {
        AUTH : AuthSlice
    }
})