import React from 'react'
import { useDispatch } from 'react-redux';
import { dogApi, useGetDogImagesQuery } from '../../services/dog-api';
import { resetGame } from '../../services/game-slice';
import LeaderBoard from '../leader-board/LeaderBoard';
import NameForm from '../name-form/NameForm';
import './GameOverCover.css';

const GameOverCover = () => {
  const dispatch = useDispatch();
  const{ refetch } = useGetDogImagesQuery(12);
  return (
    <div className="gameOverContainer">
      <h4 className="gameOverTitle">Game Over</h4>
      <button
        className="gameOverButton"
        onClick={() => {
          refetch();
          dispatch(resetGame());
        }}
      >
        Click here to restart
      </button>
      <NameForm />
      <LeaderBoard />
    </div>
  );
}

export default GameOverCover