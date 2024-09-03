const JumpButtons = ({ history, jumpTo }: { history: Array<Array<string>>; jumpTo: (nextMove: number) => void }) => {
  return (
    <ol className="list-decimal">
      {history.map((_, move) => {
        const description = move ? `Go to move #${move}` : 'Go to game start'

        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)} className="p-2 text-lg border-2 rounded-lg bg-gray-100">
              {description}
            </button>
          </li>
        )
      })}
    </ol>
  )
}

export default JumpButtons
