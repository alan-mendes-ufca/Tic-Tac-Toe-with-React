export default function History({ list, rewind }) {
  const listItems = list.map((value, idx) => {
    return (
      <li key={idx}>
        <button onClick={() => rewind(idx)}>
          {idx === 0 ? "Go to game start" : `Go to move #${idx}`}
        </button>
      </li>
    );
  });

  return <ol>{listItems}</ol>;
}
