import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    memories: []
}

const GlobalState = createSlice({
  name: "authUser",
  initialState,
  reducers: {
      createUser: (state, {payload}) =>{
          state.currentUser = payload
      },

      signOut: (state) =>{
          state.currentUser = null;
      },

      memoData: (state, {payload}) =>{
          state.memories = payload
      }
  }
});

export const {createUser, signOut, memoData} = GlobalState.actions

export default GlobalState.reducer