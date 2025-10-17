import { configureStore } from "@reduxjs/toolkit";
import toggleslice, { closeMenu } from "./toggleSlice";
const store = configureStore({
    reducer: {
        toggle : toggleslice,
    }

})

export default store