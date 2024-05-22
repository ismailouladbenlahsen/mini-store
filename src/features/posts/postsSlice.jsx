import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const FETCH_POST = "http://localhost:3000/posts";
const initialState = {
  posts: [],
  status: "idle",
  errors: null,
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(FETCH_POST);
    return response.data;
  } catch (errors) {
    console.error("failed fetching", errors);
  }
});
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "fullfilled";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.error.message;
      });
  },
});
export const getStatus = (state) => state.posts.status;
export const getErrors = (state) => state.posts.errors;
export const selectAllPosts = (state) => state.posts.posts;
export default postsSlice.reducer;
