import React from 'react';
import './square.css';

const Square = ({ value, onClick, winner }) => {
  if (!value) {
    return <button onClick={onClick} disabled={Boolean(winner)} />;
  }
  return (
    <div>
      <button disabled>{value}</button>
    </div>
  );
};

export default Square;
