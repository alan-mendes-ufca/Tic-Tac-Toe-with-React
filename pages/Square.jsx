export default function Square({ value, changeSquares }) {
  return (
    <button className="square" onClick={changeSquares}>
      {value}
    </button>
  );
}
