import React, { FC } from 'react';
import { Card as CardInterface } from '../../services/game-slice';

import './Card.css';

interface CardProps {
  card: CardInterface;
  image: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ image, onClick, card }) => {
  return (
    <div
      className={`cardContainer ${card.opened && 'cardOpened'} ${
        card.solved && 'cardSolved'
      }`}
      onClick={onClick}
    >
      <img alt="card" className="cardImage" src={image} />
    </div>
  );
};

export default Card;
