import { createSlice } from '@reduxjs/toolkit';
import HomeData from '../../mockData/homeData.json';


// Define the initial state using that type
const initialState = {
  data:HomeData,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
})

export default homeSlice.reducer