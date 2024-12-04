import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  registeredUsers: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      alert("fail");
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload);
    },
  },
});

export const { loginSuccess, loginFailure, logout, registerUser } =
  authSlice.actions;

export default authSlice.reducer;
