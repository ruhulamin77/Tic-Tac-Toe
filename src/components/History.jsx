/* eslint-disable react/prop-types */

const History = ({ history, jumpToHistory }) => {
  return (
    <div className="text-center p-2 bg-slate-900 rounded-sm">
      <h1 className="text-bold text-2xl text-cyan-800 font-bold">
        History Stack
      </h1>
      <ol>
        {history.map((squares, move) => (
          <li key={move}>
            <button
              onClick={() => jumpToHistory(move)}
              className={`rounded px-2 py-1 m-1 ${
                !move ? 'bg-red-500' : `bg-gray-700`
              }  text-gray-300`}
            >
              {move > 0 ? `Go to the move #${move}` : `Start Game`}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default History;
