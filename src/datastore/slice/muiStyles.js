import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  styleType:"default",
  fontsize:1,
}

export const muiStylesSlice = createSlice({
  name: 'muiStyles',
  initialState,
  reducers: {
    setStyleType: (state, action) => {
        state.styleType = action.payload;
       
    },
    setFontSize: (state, action) => {
        state.fontsize = action.payload;
    },
  },
})

export const { setStyleType, setFontSize } = muiStylesSlice.actions;

export default muiStylesSlice.reducer