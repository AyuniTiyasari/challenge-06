import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postDetails: null,
  searchResults: []
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    setPostSearch: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setPosts, setPostDetails, setPostSearch } = postSlicer.actions;

export default postSlicer.reducer;