import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import postsReducer from './posts';
import albumsReducer from './albums';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    user: userReducer,
    posts: postsReducer,
    albums: albumsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
