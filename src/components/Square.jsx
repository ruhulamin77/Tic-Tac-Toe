/* eslint-disable react/prop-types */
export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="text-2xl m-1 w-24 h-24 border border-gray-500 text-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
