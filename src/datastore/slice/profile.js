import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  name:"",
  email:"",
  address1:"",
  address2:"",
  arrayAddress:[],
  selected:0,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.selected = action.payload.selected;
        const myAddress = state.arrayAddress[action.payload.selected]
        state.address1 = myAddress.address1;
        state.address2 = myAddress.address2;
    },
    addAddresses:(state, action) => {
        // console.log("my address ",state.name, action.payload);
        state.arrayAddress = [
            ...state.arrayAddress,
            action.payload
        ];
    },
    removeAddress:(state,action)=>{
        state.arrayAddress = [
            ...state.arrayAddress.slice(0, action.payload),
            ...state.arrayAddress.slice(action.payload + 1, state.arrayAddress.length),
        ];

        console.log("my index ", state.selected, action.payload);

        //is selected is remove default to 0 index 
        if(action.payload === state.selected){
            state.selected = 0;
        }else if(state.arrayAddress <=1){
            state.selected = 0;
        }
    },
    clearProfile: (state, action) => {
        state.name = "";
        state.email = "";
        state.address1 = "";
        state.address2 = "";
    },
  },
})

export const { setProfileData, clearProfile, addAddresses, removeAddress } = profileSlice.actions;

export default profileSlice.reducer