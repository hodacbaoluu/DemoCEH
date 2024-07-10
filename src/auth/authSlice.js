import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    msg : "",
    user: "",
    token: "",
    loading : false,
    error : ""
}

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export const {} = authSlice.actions

export default authSlice.reducer