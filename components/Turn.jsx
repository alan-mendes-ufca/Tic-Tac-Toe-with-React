export default function Turn({ xIsCurrent, turnIdx }) {
  return (
    <>
      <p>- Current player: {xIsCurrent ? "X" : "O"}</p>
      <p>- Current turn: {turnIdx}</p>
    </>
  );
}
