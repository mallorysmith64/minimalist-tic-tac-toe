import React, { useState } from 'react'
import Cell from './Cell'

const GameBoard = () => {
  const [cells, setCells] = useState([0,0,0, 0,0,0, 0,0,0])
  const [XNext, setXNext] = useState(true)
  const status = "Next Player is "

const renderCells = (i) => {
  return <Cell onClick={() => {
    const nextCell = cells.slice()
    nextCell[i] = XNext ? 'X' : "O"
    setXNext(!XNext)
    setCells(nextCell)
  }}
  value={cells[i]}
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
