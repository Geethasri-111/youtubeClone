import { createSlice } from "@reduxjs/toolkit";

const toggleslice = createSlice({
    name:"toggle",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggle:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu :(state)=>{
            state.isMenuOpen = false;
        }
    }
})
export const{toggle , closeMenu} = toggleslice.actions;

export default toggleslice.reducer;

