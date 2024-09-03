'use client'

import { useState } from 'react'
import Board from './Board'

const Game = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [history, setHistory] = useState<Array<Array<string>>>([Array(9).fill(null)])

  const currentSquares = history[history.length - 1]

  function handlePlay(newSquares: string[]) {
    setHistory([...history, newSquares])
    setXIsNext(!xIsNext)
  }

  return (
    <div className="flex gap-8">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

export default Game
