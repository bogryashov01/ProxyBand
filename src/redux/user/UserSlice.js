import { createSlice } from '@reduxjs/toolkit';
import { GetUsers } from './async-actions';

const initialState = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.users = action.payload.data;
        state.loading = false;
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default userSlice;
