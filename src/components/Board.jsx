import calculateWinner from '../utils/calculateWinner';
import Square from './Square';

/* eslint-disable react/prop-types */
export default function Board({ currentSquares, xIsNext, onPlay }) {
  // calculate winner

  let result = calculateWinner(currentSquares);

  let winner;
  let draw;
  if (result === 'Draw') {
    draw = result;
  } else {
    winner = result;
  }

  let status;
  if (winner) {
    status = <span className="text-green-600">Player {winner} is Winner!</span>;
  } else if (draw) {
    status = <span className="text-orange-500">Match is Draw !</span>;
  } else {
    status = <span>Next Player is: {xIsNext ? 'X' : 'O'}</span>;
  }

  //   function checkAllsqueresFilled() {}

  function handleSquareClick(i) {
    // stop program if the square already has value or declared a winner
    if (currentSquares[i] || calculateWinner(currentSquares)) {
      return;
    }

    // create a clone copy to the original squares object
    const nextSquares = currentSquares.slice();

    // set square value X or O conditionally
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  return (
    <div className="bg-gray-800 p-10 text-gray-400 rounded-sm">
      <h1 className="text-bold text-2xl mb-10">{status}</h1>
      <div className="flex">
        <Square
          value={currentSquares[0]}
          onSquareClick={() => handleSquareClick(0)}
        />
        <Square
          value={currentSquares[1]}
          onSquareClick={() => handleSquareClick(1)}
        />
        <Square
          value={currentSquares[2]}
          onSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="flex">
        <Square
          value={currentSquares[3]}
          onSquareClick={() => handleSquareClick(3)}
        />
        <Square
          value={currentSquares[4]}
          onSquareClick={() => handleSquareClick(4)}
        />
        <Square
          value={currentSquares[5]}
          onSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="flex">
        <Square
          value={currentSquares[6]}
          onSquareClick={() => handleSquareClick(6)}
        />
        <Square
          value={currentSquares[7]}
          onSquareClick={() => handleSquareClick(7)}
        />
        <Square
          value={currentSquares[8]}
          onSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </div>
  );
}
