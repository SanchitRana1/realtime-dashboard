import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",
  initialState:{
    user:JSON.parse(sessionStorage.getItem("user")) || null,
    loading:true,
  },
  reducers :{
    login:(state,action) => {
      state.user = action.payload;
      state.loading = false;
    },
    logout:(state) => {
      state.user = null;
      sessionStorage.removeItem("user"); // Clear sessionStorage
      state.loading = false;

    }
  }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;