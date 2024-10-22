import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';

const initialState = {
   pastes:localStorage.getItem("pastes")
   ? JSON.parse(localStorage.getItem("pastes"))
   : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast("paste created successfully")
      
    },
    updateToPaste: (state, action) => {
      const paste= action.payload;
      const index = state.pastes.findIndex((item)=>item._id === paste._id);

      if(index >=0){
        state.pastes[index]= paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes))

        toast.success("paste Updated")
      }
    },
    resetALLPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes")
    },
    removefromPastes:(state, action) =>{
      const pasteId= action.payload;
      console.log(pasteId)
      const index = state.pastes.findIndex((item)=>item._id === pasteId);

      if(index >= 0){
        state.pastes.splice(index,1);

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("paste deleted")
      }


    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes,  updateToPaste, iresetALLPastes, removefromPastes } = pasteSlice.actions

export default pasteSlice.reducer