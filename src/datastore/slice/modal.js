import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  profileModal:false,
  logoutModal:false,
  orderPlacedModal:false,
  addressModal:false,
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
    },
    orderPlacedModal:(state, action) => {
        state.orderPlacedModal = action.payload;
    },
    addressModal:(state, action) => {
        state.addressModal = action.payload;
    },
  },
})

export const { profileModal, logoutModal, orderPlacedModal, addressModal } = modalSlice.actions;

export default modalSlice.reducer