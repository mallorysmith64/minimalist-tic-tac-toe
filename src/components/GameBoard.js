import React, { useState } from 'react'

const GameBoard = () => {
  // const [Board, setBoard] = useState([0,0,0, 0,0,0, 0,0,0])

  return (
    <>
      <section className="page-header">
        <h5 className="page-title">Tic Tac Toe</h5>
     </section>
     <section>
       <h2 className="square">X</h2>
     </section>
    </>
  )
}

export default GameBoard
