import React, { useEffect, useState } from "react";
import Square from "../components/Square";
import "./board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }

  function setSquareValue(index) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    console.log(w);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("Both");
    }
  }, [squares]);
  return (
    <div className="body-section">
      <div className="bg-blur"></div>
      <div className="container">
        <div className="player-turn">
          {!winner && (
            <p>
              <span className="current-player">{currentPlayer} : </span> players
              turn{" "}
            </p>
          )}
        </div>
      </div>

      {winner && winner !== "Both" && (
        <div className="result-board">
          <p>Winner : {winner} </p>
        </div>
      )}
      {winner && winner === "Both" && (
        <div className="result-board">
          <p>Draw</p>
        </div>
      )}

      <div className="tc-wrapper">
        <div className="container">
          <div className="tc-top-section">
            <div className="tc-box-wrapper">
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
          </div>
          <div className="tc-bottom-section">
            <button className="tc-reset" onClick={reset}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
