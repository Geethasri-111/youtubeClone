import { configureStore } from "@reduxjs/toolkit";
import toggleslice from "./toggleSlice";
const store = configureStore({
    reducer: {
        toggle : toggleslice,
    }

})

export default store