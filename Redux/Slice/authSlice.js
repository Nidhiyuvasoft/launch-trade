import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  }
});

export const {
  logout,
} = authSlice.actions;
export default authSlice.reducer;
