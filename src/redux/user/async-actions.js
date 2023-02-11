import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../../constants';

export const GetUsers = createAsyncThunk(
  '/users',
  async () => await axios.get(`${BASE_URL}/users`),
);
