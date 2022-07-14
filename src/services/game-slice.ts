import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { range } from './range';
import { shuffle } from './shuffle';

export interface GameState {
  cards: Card[];
  currentOpen: number[];
  gameOver: boolean;
  moves: number;
  timeStart: number;
  timeEnd: number;
}

export interface Card {
  index: number;
  opened: boolean;
  solved: boolean;
}

const generateCards = () => {
  return shuffle(range(12)
    .concat(range(12))
    .map((i) => ({ index: i, opened: false, solved: false })));
}

export const initialState: GameState = {
  cards: generateCards(),
  currentOpen: [],
  gameOver: false,
  moves: 0,
  timeStart: new Date().getTime(),
  timeEnd: new Date().getTime(),
};

export const gameSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    openCard: (state, { payload }: PayloadAction<number>) => {
      const openedCard = state.cards[payload];
      openedCard.opened = true;
      state.moves += 1;

      if (state.currentOpen.length) {
        if (
          state.currentOpen.every(
            (index) => state.cards[index].index === openedCard.index
          )
        ) {
          state.currentOpen.forEach((index) => {
            state.cards[index].solved = true;
          });
          openedCard.solved = true;
          state.currentOpen = [];
          if (checkIfGameOver(state.cards)) {
            state.gameOver = true;
            state.timeEnd = new Date().getTime();
          }
          return;
        }
      }

      if (state.currentOpen.length === 2) {
        state.currentOpen.forEach((index) => {
          state.cards[index].opened = false;
        });
        state.currentOpen = [];
      }

      state.currentOpen.push(payload);
    },
    resetGame: (state) => {
      return { cards: generateCards(), currentOpen: [], gameOver: false, moves: 0, timeStart: new Date().getTime(), timeEnd: new Date().getTime() };
    }
  },
});

export const { openCard, resetGame } = gameSlice.actions;

export default gameSlice.reducer;

const checkIfGameOver = (cards: Card[]) => {
  return cards.every(card => card.solved);
};
