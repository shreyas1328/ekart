import { createSlice } from '@reduxjs/toolkit';
import HomeData from '../../mockData/homeData.json'; 


// Define the initial state using that type
const initialState = {
  data:{},
}

export const descriptionSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getOneItem: (state, action) => {
        console.log(action.payload);
      state.data = HomeData.find(ele => ele.id == action.payload)
    },
    clearItem: (state, action) => {
      state.data = {};
    },
  },
})

export const { getOneItem, clearItem } = descriptionSlice.actions;

export default descriptionSlice.reducer