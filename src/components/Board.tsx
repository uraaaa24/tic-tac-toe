import Square from './Square'

const Board = () => {
  return (
    <div className="grid grid-cols-3 w-48 h-48">
      {Array.from({ length: 9 }).map((_, i) => (
        <Square key={i} value={i.toString()} />
      ))}
    </div>
  )
}

export default Board
