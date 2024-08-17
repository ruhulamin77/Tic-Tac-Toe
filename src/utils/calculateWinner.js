export default function calculateWinner(squares) {
  // this lines indicates the squares index number
  const lines = [
    [0, 1, 2], // প্রথম সারি
    [3, 4, 5], // দ্বিতীয় সারি
    [6, 7, 8], // তৃতীয় সারি
    [0, 3, 6], // প্রথম কলাম
    [1, 4, 7], // দ্বিতীয় কলাম
    [2, 5, 8], // তৃতীয় কলাম
    [0, 4, 8], // প্রথম ডায়াগোনাল (উপর থেকে নিচ)
    [2, 4, 6], // দ্বিতীয় ডায়াগোনাল (নিচ থেকে উপর)
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // check all the value[X or O] of square of lines are same or not, if the X matches all the square of line, then the winner is X, and same logic goes to the O payer
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // Check if all squares are filled
  const allFilled = squares.every((square) => square !== null);

  if (allFilled) {
    return 'Draw';
  }
  return null;
}
