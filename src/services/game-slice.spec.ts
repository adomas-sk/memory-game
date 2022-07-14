import { openCard, resetGame } from './game-slice';
import { mockStore } from './mock-store';

describe('game-slice', () => {
  it('should initialize game state with initial data', () => {
    const state = mockStore().getState().game;
    expect(state.currentOpen).toEqual([]);
    expect(state.gameOver).toEqual(false);
    expect(state.moves).toEqual(0);
    expect(state.timeStart).toBeLessThanOrEqual(Date.now());
    expect(state.timeEnd).toBeLessThanOrEqual(Date.now());
  });

  it('should set card at index as open with openCard', () => {
    const store1 = mockStore();
    store1.dispatch(openCard(0));
    const state1 = store1.getState().game;
    expect(state1.cards[0].opened).toBe(true);

    const store2 = mockStore();
    store2.dispatch(openCard(15));
    const state2 = store2.getState().game;
    expect(state2.cards[15].opened).toBe(true);
  });

  it('should set cards as solved if both have been opened', () => {
    const store = mockStore();
    const initialCards = store.getState().game.cards;
    const firstCardIndex = initialCards.findIndex(
      (card) => card.index === initialCards[initialCards.length - 1].index
    );

    store.dispatch(openCard(firstCardIndex));
    store.dispatch(openCard(initialCards.length - 1));

    const cardsState = store.getState().game.cards;
    expect(cardsState[firstCardIndex].solved).toBe(true);
    expect(cardsState[initialCards.length - 1].solved).toBe(true);
  });

  it("should close cards if they don't match", () => {
    const store = mockStore();
    const initialCards = store.getState().game.cards;
    const otherCardIndex = initialCards.findIndex(
      (card) => card.index !== initialCards[0].index
    );

    store.dispatch(openCard(otherCardIndex));
    store.dispatch(openCard(0));
    store.dispatch(openCard(0));

    const cardsState = store.getState().game.cards;
    expect(cardsState[otherCardIndex].solved).toBe(false);
    expect(cardsState[otherCardIndex].opened).toBe(false);
    expect(cardsState[0].solved).toBe(false);
  });

  it('should reset game state', () => {
    const store = mockStore();
    store.dispatch(openCard(0));
    store.dispatch(openCard(1));
    store.dispatch(openCard(2));
    store.dispatch(openCard(3));
    store.dispatch(resetGame());

    const state = store.getState();
    const cardsState = state.game.cards;
    cardsState.forEach(card => {
      expect(card.opened).toBe(false);
      expect(card.solved).toBe(false);
    });
    expect(state.game.currentOpen).toEqual([]);
    expect(state.game.gameOver).toEqual(false);
    expect(state.game.moves).toEqual(0);
    expect(state.game.timeStart).toBeLessThanOrEqual(Date.now());
    expect(state.game.timeEnd).toBeLessThanOrEqual(Date.now());
  });
  
  // TODO: add test for when all cards are solved
});
