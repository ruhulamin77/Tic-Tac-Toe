import { useState } from 'react';
import Board from './components/Board';
import History from './components/History';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpToHistory(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-indigo-400 from-10% to-emerald-500 to-90%">
      <div className="text-center p-5 bg-gray-600 rounded-md">
        <h2 className="text-3xl text-gray-700 font-bold p-5 bg-slate-500 bg-gradient-to-r from-slate-400 to-gray-500">
          TIC-TAC-TOE
        </h2>
        <div className="flex">
          <Board
            currentSquares={currentSquares}
            xIsNext={xIsNext}
            onPlay={handlePlay}
          />
          <History history={history} jumpToHistory={jumpToHistory} />
        </div>
      </div>
    </div>
  );
}
