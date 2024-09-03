const Square = ({
  value,
  onSquareClick,
  className
}: {
  value: string
  onSquareClick: () => void
  className?: string
}) => {
  return (
    <button onClick={onSquareClick} className={`border-gray-400 p-2 h-16 w-16 text-4xl ${className}`}>
      {value}
    </button>
  )
}

export default Square
