import Board from "./Board";
import Turn from "./Turn";
import { calculateWinner, VictoryFeedback } from "./Victory";
import { useState } from "react";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsCurrent, setXIsCurrent] = useState(true);
  const [winner, setWinner] = useState(null);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextBoard = squares.slice();

    nextBoard[i] = xIsCurrent ? "X" : "O";
    setXIsCurrent(!xIsCurrent);

    const newWinner = calculateWinner(nextBoard);
    setWinner(newWinner);

    setSquares(nextBoard);
  }

  return (
    <>
      <Turn xIsCurrent={xIsCurrent} />
      <Board squares={squares} handleClick={handleClick} />
      <VictoryFeedback winner={winner} />
    </>
  );
}
