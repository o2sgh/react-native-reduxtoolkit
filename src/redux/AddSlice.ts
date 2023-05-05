import {createSlice} from '@reduxjs/toolkit';
import LocalStorage from '../services/LocalStorage';
let local = new LocalStorage();

const initialState = {
  textItems: [],
};
const AddSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    storeData(state, action) {
      //@ts-ignore
      state.textItems =  action.payload;
      local.setUserData('data',{kuchbhi:state.textItems});
    
    },
    
  },
});

export const {storeData,} = AddSlice.actions;
export default AddSlice.reducer;
