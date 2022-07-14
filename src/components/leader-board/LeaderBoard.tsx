import React from 'react';
import { useSelector } from 'react-redux';
import { getLeaderboard } from '../../services/selectors';

import './LeaderBoard.css';

const LeaderBoard = () => {
  const leaderboard = useSelector(getLeaderboard);
  return (
    <div className="leaderBoardContainer">
      <div className="leaderBoardRow">
        <p>Position:</p>
        <p>Name:</p>
        <p>Time (seconds):</p>
        <p>Moves:</p>
      </div>
      {leaderboard.map(({ name, time, moves }, index) => (
        <div key={index} className="leaderBoardRow">
          <p>{index + 1}</p>
          <p>{name}</p>
          <p>{time}</p>
          <p>{moves}</p>
        </div>
      ))}
    </div>
  );
};

export default LeaderBoard;
