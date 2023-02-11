import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../../constants';

export const GetPosts = createAsyncThunk(
  '/posts',
  async (userId) => await axios.get(`${BASE_URL}/posts?userId=${userId}`),
);
