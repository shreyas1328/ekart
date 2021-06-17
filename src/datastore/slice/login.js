import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  username:"",
  password:"",
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getLoginData: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
})

export const { getLoginData } = loginSlice.actions;

export default loginSlice.reducer