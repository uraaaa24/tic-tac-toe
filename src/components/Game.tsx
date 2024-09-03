'use client'

import { useState } from 'react'
import Board from './Board'
import JumpButtons from './JumpButton'

const Game = () => {
  const [history, setHistory] = useState<Array<Array<string>>>([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState<number>(0)

  const xIsNext = stepNumber % 2 === 0
  const currentSquares = history[stepNumber]

  function handlePlay(newSquares: string[]) {
    const newHistory = [...history.slice(0, stepNumber + 1), newSquares]

    setHistory(newHistory)
    setStepNumber(newHistory.length - 1)
  }

  function jumpTo(move: number) {
    setStepNumber(move)
  }

  return (
    <div className="flex gap-8">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <JumpButtons history={history} jumpTo={jumpTo} />
    </div>
  )
}

export default Game
