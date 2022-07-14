import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game-slice';
import leaderboardReducer from './leaderboard-slice';
import { dogApi } from './dog-api';

export const store = configureStore({
  reducer: {
    [dogApi.reducerPath]: dogApi.reducer,
    game: gameReducer,
    leaderboard: leaderboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
