import Board from "./Board";
import Turn from "./Turn";
import { useState } from "react";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsCurrent, setXIsCurrent] = useState(true);

  function handleClick(i) {
    if (squares[i]) return;
    const nextBoard = squares.slice();

    nextBoard[i] = xIsCurrent ? "X" : "O";
    setXIsCurrent(!xIsCurrent);

    setSquares(nextBoard);
  }

  return (
    <>
      <Turn xIsCurrent={xIsCurrent} />
      <Board squares={squares} handleClick={handleClick} />
    </>
  );
}
