import { RootState } from './store';

export const getCards = (state: RootState) => state.game.cards;
export const getGameOverState = (state: RootState) => state.game.gameOver;
export const getMoves = (state: RootState) => state.game.moves;
export const getTime = (state: RootState) =>
  (state.game.timeEnd - state.game.timeStart) / 1000;

export const getLeaderboard = (state: RootState) =>
  state.leaderboard.leaderboard;
