import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCard } from '../../services/game-slice';
import { getCards, getGameOverState } from '../../services/selectors';
import Card from '../card/Card';
import GameOverCover from '../game-over-cover/GameOverCover';

import './Cards.css';

interface CardsProps {
  images: string[];
}

const Cards: FC<CardsProps> = ({ images }) => {
  const cards = useSelector(getCards);
  const isGameOver = useSelector(getGameOverState);
  const dispatch = useDispatch();
  return (
    <div className="cardsContainer">
      {isGameOver && <GameOverCover />}
      {cards.map((card, i) => (
        <Card
          card={card}
          onClick={!card.solved ? () => dispatch(openCard(i)) : () => {}}
          key={i}
          image={images[card.index]}
        />
      ))}
    </div>
  );
};

export default Cards;
