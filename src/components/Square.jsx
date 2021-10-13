import React from "react";
import "./square.css";

const Square = ({ value, onClick, winner }) => {
  if (!value) {
    return (
      <div className={`square-box`}>
        <button
          className={`square`}
          onClick={onClick}
          disabled={Boolean(winner)}
        />
      </div>
    );
  }
  return (
    <div className={`square-box`}>
      <button className={`square square_${value.toLowerCase()}`} disabled>
        {value}
      </button>
    </div>
  );
};

export default Square;
