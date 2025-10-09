import { createSlice } from "@reduxjs/toolkit";

const toggleslice = createSlice({
    name:"toggle",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggle:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})
export const{toggle} = toggleslice.actions;

export default toggleslice.reducer;

