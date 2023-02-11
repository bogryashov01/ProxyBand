import { createSlice } from '@reduxjs/toolkit';
import { GetPosts } from './async-actions';

const initialState = {
  posts: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetPosts.fulfilled, (state, action) => {
        state.posts = action.payload.data;
        state.loading = false;
      })
      .addCase(GetPosts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default userSlice;
