import React, { useState } from 'react';
import Square from '../components/Square';
import './board.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(
    Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
  );
  const [winner, setWinner] = useState(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? 'X' : 'O');
  }

  function setSquareValue(index) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <div>
      <p>{currentPlayer} Players turn </p>
      <div className='grid'>
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                value={squares[i]}
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
              />
            );
          })}
      </div>
      <button className='reset' onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default Board;
