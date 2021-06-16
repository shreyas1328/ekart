import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  width:0,
  height:0,
  baseHeight:0,
}

export const screenDimensionSlice = createSlice({
  name: 'ScreenDimension',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getScreenDimension: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.baseHeight = action.payload.baseHeight;
    },
  },
})

export const { getScreenDimension } = screenDimensionSlice.actions;

export default screenDimensionSlice.reducer