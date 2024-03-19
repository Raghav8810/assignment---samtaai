import GameBox from "./GameBox";

import "../styles/PlayBoard.css"
export const PlayBoard = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          return <GameBox value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}
