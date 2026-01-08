import Board from "./Board";
import Turn from "./Turn";
import { calculateWinner, VictoryFeedback } from "./Victory";
import History from "./History";

import { useState } from "react";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsCurrent, setXIsCurrent] = useState(true);
  const [winner, setWinner] = useState(null);

  const [history, setHistory] = useState([]);
  const [turn, setTurn] = useState(0);
  const [isInRewardState, setIsInRewardState] = useState(false);

  function handleClick(i) {
    if (isInRewardState) {
      return;
    }
    if (squares[i] || winner) return;
    const nextBoard = squares.slice();

    nextBoard[i] = xIsCurrent ? "X" : "O";
    setXIsCurrent(!xIsCurrent);

    const newWinner = calculateWinner(nextBoard);
    setWinner(newWinner);

    setSquares(nextBoard);

    const copyHistory = history.slice();
    copyHistory.push(nextBoard);
    setHistory(copyHistory);

    setTurn(turn + 1);
    console.log(turn);
  }

  function rewind(i) {
    setIsInRewardState(true);
    setSquares(history[i]);
  }

  return (
    <>
      <Turn xIsCurrent={xIsCurrent} turnIdx={turn} />
      <Board squares={squares} handleClick={handleClick} />
      <VictoryFeedback winner={winner} />
      <History list={history} rewind={rewind} />
    </>
  );
}
