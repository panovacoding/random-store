import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './reducers/favoriteReducer';

const savedFavorites: number[] = JSON.parse(
  localStorage.getItem('favorites') || '[]'
);

const store = configureStore({
  reducer: {
    favorites: favoriteReducer
  },
  preloadedState: {
    favorites: savedFavorites,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


