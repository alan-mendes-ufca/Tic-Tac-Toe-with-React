import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} changeSquares={() => handleClick(0)} />
        <Square value={squares[1]} changeSquares={() => handleClick(1)} />
        <Square value={squares[2]} changeSquares={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} changeSquares={() => handleClick(3)} />
        <Square value={squares[4]} changeSquares={() => handleClick(4)} />
        <Square value={squares[5]} changeSquares={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} changeSquares={() => handleClick(6)} />
        <Square value={squares[7]} changeSquares={() => handleClick(7)} />
        <Square value={squares[8]} changeSquares={() => handleClick(8)} />
      </div>
    </>
  );
}
