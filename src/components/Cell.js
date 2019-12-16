import React from 'react'

const Cell = ({onClick, value, displayWinner}) => {
const highlightWinner= "cell" + (displayWinner ? "highlight" : "")

    return (
        <>
        <button className={highlightWinner} onClick={onClick}>{value}</button>
        </>
    )
}

export default Cell