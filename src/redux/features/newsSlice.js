import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  topStoriesId: [],
  newsFeed: [],
  newsDetails: [],
};

export const newsSlice = createSlice({
  name: 'newsFeed',
  initialState,
  reducers: {
    setNewsFeed: (state, {payload}) => {
      state.newsFeed = payload;
    },
    addNewsFeed: (state, {payload}) => {
      state.newsFeed.push(payload);
    },
    saveTopStoriesId: (state, {payload}) => {
      state.topStoriesId = payload;
    },
    saveNewsDetails: (state, {payload}) => {
      state.newsDetails = [...state.newsDetails, payload];
    },
  },
});

export const {addNewsFeed, setNewsFeed, saveNewsDetails, saveTopStoriesId} =
  newsSlice.actions;

export default newsSlice.reducer;
