import { configureStore } from "@reduxjs/toolkit";
import AddSlice from "./AddSlice";

export const store = configureStore ({
    reducer:{
         add:AddSlice,
         
    },
})
    