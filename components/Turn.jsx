export default function Turn({ xIsCurrent }) {
  return <p>- Current player: {xIsCurrent ? "X" : "O"}</p>;
}
