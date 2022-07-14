import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeaderbordState {
  leaderboard: LeaderboardRow[],
}

interface LeaderboardRow {
  name: string;
  time: number;
  moves: number;
}

const getLocalStorageLeaderboard = () => {
  const leaderboardStorage = localStorage.getItem('leaderboard');
  if (leaderboardStorage) {
    return JSON.parse(leaderboardStorage);
  }
  return [];
}

const initialState: LeaderbordState = {
  leaderboard: getLocalStorageLeaderboard(),
}

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addRow: (state, { payload }: PayloadAction<LeaderboardRow>) => {
      state.leaderboard.push(payload);
      state.leaderboard.sort((a, b) => a.moves - b.moves);
      state.leaderboard.sort((a, b) => a.time - b.time);
      state.leaderboard = state.leaderboard.slice(0, 10);
      localStorage.setItem('leaderboard', JSON.stringify(state.leaderboard));
    }
  },
})

export const { addRow } = leaderboardSlice.actions

export default leaderboardSlice.reducer;
