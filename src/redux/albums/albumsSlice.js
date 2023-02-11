import { createSlice } from '@reduxjs/toolkit';
import { GetAlbums } from './async-actions';

const initialState = {
  albums: [],
  loading: false,
};

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetAlbums.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetAlbums.fulfilled, (state, action) => {
        state.albums = action.payload.data;
        state.loading = false;
      })
      .addCase(GetAlbums.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default albumSlice;
