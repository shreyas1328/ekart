import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
 show:false,
 message:"",
 severity:"",
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.show = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    closeToast: (state, action) => {
      state.show = false;
    },
  },
})

export const { showToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer