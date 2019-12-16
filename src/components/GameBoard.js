import React, { useState } from 'react'
import Cell from './Cell'
import WinningLogic from './WinningLogic'

const GameBoard = () => {
  //fill with null otherwise x's and o's will be displayed without ever being clicked
  const [cells, setCells] = useState(Array(9).fill(null));
  const [XNext, setXNext] = useState(true)

  const winningInfo = WinningLogic(cells);
    const winner = winningInfo.winner;
  
    const winnerHighlight = winningInfo.line;
    let status;
    if (winner) {
      status = "Hurray the winner is " + winner;
    } else if (winningInfo.isDraw) {
      status = "It's a Draw";
    } else {
      status = "Next Player is " + (XNext ? "X" : "O");
    }

const renderCells = (i) => {
  return <Cell onClick={() => {
    const nextCell = cells.slice()
    nextCell[i] = XNext ? 'X' : "O"
    setXNext(!XNext)
    setCells(nextCell)
  }}
  value={cells[i]}
  highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
  />
}


  return (
    <>
      <section className="page-header">
        <h5 className="page-title">Tic Tac Toe</h5>
     </section>

     <section>
      <h1 className="status">{status}</h1>
      <div className="board-row">
        {renderCells(0)}
        {renderCells(1)}
        {renderCells(2)}
      </div>

      <div className="board-row">
        {renderCells(3)}
        {renderCells(4)}
        {renderCells(5)}
      </div>

      <div className="board-row">
        {renderCells(6)}
        {renderCells(7)}
        {renderCells(8)}
      </div>
    </section>
    </>
  )
}

export default GameBoard
