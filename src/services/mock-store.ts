import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game-slice';
import leaderboardReducer from './leaderboard-slice';
import { dogApi } from './dog-api';

export const mockStore = () => {
  const store = configureStore({
    reducer: {
      [dogApi.reducerPath]: dogApi.reducer,
      game: gameReducer,
      leaderboard: leaderboardReducer,
    },
  });

  return store
}