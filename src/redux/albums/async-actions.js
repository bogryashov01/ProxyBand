import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../../constants';

export const GetAlbums = createAsyncThunk(
  '/albums',
  async (userId) => await axios.get(`${BASE_URL}/albums?userId=${userId}`),
);
