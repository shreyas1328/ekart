import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  name:"",
  email:"",
  address1:"",
  address2:"",
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.address1 = action.payload.address1;
        state.address2 = action.payload.address2;
    },
    clearProfile: (state, action) => {
        state.name = "";
        state.email = "";
        state.address1 = "";
        state.address2 = "";
    },
  },
})

export const { setProfileData, clearProfile } = profileSlice.actions;

export default profileSlice.reducer