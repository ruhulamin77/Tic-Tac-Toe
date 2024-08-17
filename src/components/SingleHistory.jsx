/* eslint-disable react/prop-types */
const SingleHistory = ({ jumpToHistory, move }) => {
  let description;
  if (move > 0) {
    description = `Go to the move #${move}`;
  } else {
    description = `Start game again`;
  }
  return (
    <li>
      <button
        onClick={() => jumpToHistory(move)}
        className="bg-gray-200 rounded px-2 m-1 border border-red-400"
      >
        {description}
      </button>
    </li>
  );
};

export default SingleHistory;
