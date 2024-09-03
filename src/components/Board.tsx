import { calculateWinner } from '@/utils'
import Square from './Square'

const Board = ({
  xIsNext,
  squares,
  onPlay
}: {
  xIsNext: boolean
  squares: string[]
  onPlay: (squares: string[]) => void
}) => {
  let status: string

  const winner = calculateWinner(squares)
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  function handleSquareCLick(i: number) {
    if (squares[i] || calculateWinner(squares)) return

    const newSquares = squares.slice()
    if (xIsNext) {
      newSquares[i] = 'X'
    } else {
      newSquares[i] = 'O'
    }

    onPlay(newSquares)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="p-2 text-xl">{status}</div>
      <div className="grid grid-cols-3 w-48 h-48">
        {Array.from({ length: 9 }).map((_, i) => {
          const value = (i + 1).toString()

          return (
            <Square
              key={i}
              value={squares[i]}
              onSquareClick={() => handleSquareCLick(i)}
              className={`
              ${i < 3 ? 'border-t-2' : ''}
              ${i % 3 === 0 ? 'border-l-2' : ''}
              ${i % 3 === 2 ? 'border-r-2' : ''}
              ${i > 5 ? 'border-b-2' : ''}
              border-r-2 border-b-2
            `}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Board
