import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRow } from '../../services/leaderboard-slice';
import { getMoves, getTime } from '../../services/selectors';

import './NameForm.css';

const NameForm = () => {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  
  const moves = useSelector(getMoves);
  const time = useSelector(getTime);
  return (
    <form className="nameForm">
      <label htmlFor="name">Name</label>
      <input
        disabled={saved}
        className="nameFormInput"
        id="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <button
        className="nameFormButton"
        onClick={(e) => {
          e.preventDefault();
          if (!saved) {
            dispatch(addRow({ name, time, moves }));
            setSaved(true);
          }
        }}
      >
        Save
      </button>
    </form>
  );
};

export default NameForm;
