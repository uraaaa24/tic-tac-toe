import Square from './Square'

const Board = () => {
  return (
    <div className="grid grid-cols-3 w-48 h-48">
      {Array.from({ length: 9 }).map((_, i) => {
        const value = (i + 1).toString()

        return (
          <Square
            key={i}
            value={value}
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
  )
}

export default Board
