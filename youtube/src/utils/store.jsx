import { configureStore } from "@reduxjs/toolkit";
import toggleslice, { closeMenu } from "./toggleSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
    reducer: {
        toggle : toggleslice,
        search : searchSlice,
    }

})

export default store