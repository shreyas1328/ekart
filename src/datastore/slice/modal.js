import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  profileModal:false,
  logoutModal:false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    profileModal: (state, action) => {
      state.profileModal = action.payload;
    },
    logoutModal:(state, action) => {
        state.logoutModal = action.payload;
    }
  },
})

export const { profileModal, logoutModal } = modalSlice.actions;

export default modalSlice.reducer