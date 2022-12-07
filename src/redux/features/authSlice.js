import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  credentials: null,
};

export const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    saveCredentials: (state, {payload}) => {
      state.credentials = payload;
    },
  },
});

export const {saveCredentials} = authSlice.actions;

export default authSlice.reducer;
