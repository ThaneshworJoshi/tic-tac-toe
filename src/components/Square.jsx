import React from 'react';
import './square.css';

const Square = ({ value, onClick, winner }) => {
  if (!value) {
    return (
      <button className='square' onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <div>
      <button className={`square square_${value.toLowerCase()}`} disabled>
        {value}
      </button>
    </div>
  );
};

export default Square;
