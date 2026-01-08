// Determine if a winning line exists; returns "X", "O" or null
export function calculateWinner(squares) {
  const lines = [
    // verify cols
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // verify rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // verify primary diagonal
    [0, 4, 8],
    // verify secondary diagonal
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export function VictoryFeedback({ winner }) {
  if (!winner) return null;
  return <p>The winner is {winner}</p>;
}
